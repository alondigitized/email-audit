#!/usr/bin/env python3
"""Automated QA checks for Skechers email audits.

Usage: python3 qa_checks.py <artifacts-dir>
Writes qa-report.json to the same directory, prints path to stdout.
Dependencies: Python 3 stdlib only.
"""
import json
import os
import re
import sys
import time
import urllib.request
import urllib.error
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from html.parser import HTMLParser
from urllib.parse import urlparse
import random
import threading


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def read_file(path):
    try:
        with open(path, 'r', encoding='utf-8', errors='replace') as f:
            return f.read()
    except FileNotFoundError:
        return ''


def make_check(check_id, status, label, detail, url=None):
    c = {'check_id': check_id, 'status': status, 'label': label, 'detail': detail}
    if url:
        c['url'] = url
    return c


# ---------------------------------------------------------------------------
# 1. Link Analysis
# ---------------------------------------------------------------------------

TRACKING_PIXEL_PATTERNS = re.compile(
    r'open\.aspx|1x1|pixel\.gif|track\.gif|beacon\.gif|spacer\.gif|blank\.gif',
    re.I
)
DOUBLED_DOMAIN_RE = re.compile(r'https?://([^/]+)/(?:https?://)?(?:www\.)?(\1)', re.I)
# More permissive doubled-domain: domain.com followed by /www.Domain.com or similar
DOUBLED_DOMAIN_PATH_RE = re.compile(r'https?://([^/]+\.([^/]+\.[^/]+))/.*?www\.\2', re.I)


# Per-domain rate limiter: N seconds between requests to the same host.
_domain_locks = defaultdict(threading.Lock)
_domain_last = defaultdict(float)
_MAX_RETRIES = 3


def _env_num(name, default, cast=float):
    try:
        return cast(os.environ[name])
    except (KeyError, ValueError, TypeError):
        return default


# Link probing is materiality-ranked and time-boxed. Previously this probed up
# to 50 URLs scraped by regex from the raw HTML (image srcs, CSS urls, pixels,
# footer boilerplate) through a single worker at 4s/request against the same
# host — arithmetically ~225s against the caller's 120s timeout, so qa_checks
# ALWAYS timed out and the whole report was discarded. We now probe only the
# links a reader would plausibly click, with a hard internal deadline so a slow
# host degrades coverage instead of destroying the report.
_DOMAIN_DELAY = _env_num('QA_DOMAIN_DELAY', 2.0)
# Max distinct destinations to probe, after materiality ranking.
_MAX_PROBE = _env_num('QA_LINK_MAX_PROBE', 12, int)
# Wall-clock budget for the whole probing phase. Must stay well under the
# caller's timeout (index.mjs runQaChecks: 120s) so we always return a report.
_LINK_BUDGET_S = _env_num('QA_LINK_BUDGET_S', 70.0)
# Parallel workers. Same-host requests are still serialized by _domain_locks,
# so this only buys parallelism across distinct hosts.
_PROBE_WORKERS = _env_num('QA_PROBE_WORKERS', 4, int)


def _throttle(url):
    host = urlparse(url).hostname or ''
    with _domain_locks[host]:
        now = time.monotonic()
        wait = _DOMAIN_DELAY - (now - _domain_last[host]) + random.uniform(0, 1.0)
        if wait > 0:
            time.sleep(wait)
        _domain_last[host] = time.monotonic()


def _request_url(url, method='HEAD', timeout=10):
    """HTTP request with redirect following and 429 retry. Returns (final_status, redirect_count, error_str|None)."""
    for attempt in range(_MAX_RETRIES):
        try:
            _throttle(url)

            class NoRedirect(urllib.request.HTTPRedirectHandler):
                def redirect_request(self, req, fp, code, msg, headers, newurl):
                    raise urllib.error.HTTPError(newurl, code, msg, headers, fp)

            opener = urllib.request.build_opener(NoRedirect)
            redirects = 0
            max_redirects = 10
            current_url = url

            while redirects < max_redirects:
                try:
                    r = opener.open(urllib.request.Request(current_url, method=method,
                                                           headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Walker-QA/1.0'}),
                                    timeout=timeout)
                    return (r.status, redirects, None)
                except urllib.error.HTTPError as e:
                    if 300 <= e.code < 400:
                        redirects += 1
                        location = e.headers.get('Location', '')
                        if not location:
                            return (e.code, redirects, 'redirect without Location header')
                        current_url = location
                    elif e.code == 429 and attempt < _MAX_RETRIES - 1:
                        retry_after = e.headers.get('Retry-After', '')
                        try:
                            wait = min(float(retry_after), 30)
                        except (ValueError, TypeError):
                            wait = min(2 ** (attempt + 1), 16)  # 2s, 4s, 8s, 16s
                        time.sleep(wait)
                        break  # break inner loop to retry from outer loop
                    else:
                        return (e.code, redirects, None)
            else:
                # Inner while completed without break — either success (returned above) or too many redirects
                return (0, redirects, 'too many redirects')
            # If we broke out of inner loop (429 retry), continue outer loop
            continue

        except Exception as e:
            return (0, 0, str(e))

    # Exhausted retries (should only happen for repeated 429s)
    return (429, 0, None)


def probe_url(url, timeout=10):
    """Try HEAD first; fall back to GET if HEAD returns 4xx/5xx."""
    status, redirects, err = _request_url(url, method='HEAD', timeout=timeout)
    if err is None and 400 <= status < 600:
        # HEAD rejected — retry with GET
        status2, redirects2, err2 = _request_url(url, method='GET', timeout=timeout)
        return (status2, redirects2, err2)
    return (status, redirects, err)


# Anchor text that signals a primary conversion action.
CTA_TEXT_RE = re.compile(
    r'\b(shop|buy|order|get|save|claim|redeem|start|join|book|reserve|explore|'
    r'discover|browse|find|see|view all|learn more|sign ?up|subscribe|download|'
    r'apply|register|activate|continue|checkout|add to (?:cart|bag)|'
    r'try|upgrade|renew|donate|rsvp|track|schedule)\b',
    re.I
)

# Anchor text that signals footer/utility boilerplate a reader rarely clicks.
BOILERPLATE_TEXT_RE = re.compile(
    r'\b(unsubscribe|opt.?out|privacy|terms|policy|preferences|manage|profile|'
    r'view (?:this|it|in|as|online|email)|web ?version|browser|contact us|'
    r'customer (?:service|care|support)|help|faq|store locator|find a store|'
    r'careers|accessibility|do not sell|cookie|copyright|all rights reserved|'
    r'update your|why am i|add us to|safe ?sender)\b',
    re.I
)

SOCIAL_HOST_RE = re.compile(
    r'(?:^|\.)(facebook|instagram|twitter|tiktok|youtube|pinterest|linkedin|'
    r'snapchat|threads|x)\.(?:com|co)\b',
    re.I
)

UNSUB_RE = re.compile(r'\b(unsubscribe|opt.?out|email preferences)\b', re.I)

# Anchor attributes that suggest a styled button rather than an inline text link.
BUTTON_ATTR_RE = re.compile(r'btn|button|cta|call-to-action', re.I)
BUTTON_STYLE_RE = re.compile(
    r'background(?:-color)?\s*:|display\s*:\s*(?:inline-)?block|border-radius\s*:', re.I
)


def is_button_like(attrs):
    """True if an <a> tag's own attributes suggest button styling."""
    blob = ' '.join(str(attrs.get(k, '')) for k in ('class', 'id', 'role'))
    if BUTTON_ATTR_RE.search(blob):
        return True
    style = str(attrs.get('style', ''))
    return bool(style and BUTTON_STYLE_RE.search(style))


def score_link(occurrences, total_links):
    """Rank a distinct destination by how likely a reader is to click it.

    `occurrences` is the list of {text, button_like, order} records pointing at
    this destination. Marketing emails repeat their primary CTA across the logo,
    hero image, button and a text link, so repetition is a strong signal — as is
    button styling and action verbs. Footer utility links are demoted, not
    dropped: a broken unsubscribe still matters, it just shouldn't crowd out the
    offer the email was actually sent to promote.
    """
    texts = [o['text'] for o in occurrences if o['text']]
    joined = ' '.join(texts)
    score = 0.0

    if joined and CTA_TEXT_RE.search(joined):
        score += 4.0
    if any(o['button_like'] for o in occurrences):
        score += 3.0

    # Repeats: the hero destination usually appears 3-6 times.
    score += min(3.0, len(occurrences) - 1)

    # Position: earlier links are above the fold.
    first = min(o['order'] for o in occurrences)
    if total_links and first < max(1, total_links * 0.3):
        score += 2.0

    # Demote boilerplate — only when every anchor text for this destination
    # looks like boilerplate, so a CTA sharing a URL with a footer link survives.
    if texts and all(BOILERPLATE_TEXT_RE.search(t) for t in texts):
        score -= 6.0
    if not texts:
        # Anchor with no text and no image alt — can't judge intent.
        score -= 1.0

    return score


def select_material_links(links, max_probe):
    """Pick the destinations worth spending probe budget on.

    Returns (selected_urls, skipped_count). Always reserves one slot for an
    unsubscribe link when present — a broken unsubscribe is a compliance
    problem even though nobody clicks it on purpose.
    """
    by_url = defaultdict(list)
    for i, link in enumerate(links):
        by_url[link['href']].append({
            'text': link['text'],
            'button_like': link['button_like'],
            'order': i,
        })

    total = len(links)
    scored = []
    for url, occurrences in by_url.items():
        host = urlparse(url).hostname or ''
        score = score_link(occurrences, total)
        if SOCIAL_HOST_RE.search(host):
            score -= 6.0
        first = min(o['order'] for o in occurrences)
        scored.append((score, -first, url, occurrences))

    # Highest score first; earlier document position breaks ties.
    scored.sort(key=lambda t: (t[0], t[1]), reverse=True)

    selected = [url for _, _, url, _ in scored[:max_probe]]

    # Guarantee an unsubscribe link gets probed even though it scores low.
    if len(scored) > max_probe:
        unsub = next(
            (url for _, _, url, occ in scored
             if url not in selected
             and any(UNSUB_RE.search(o['text'] or '') for o in occ)),
            None,
        )
        if unsub:
            selected = selected[:max_probe - 1] + [unsub]

    return selected, max(0, len(by_url) - len(selected))


def check_links(artifacts_dir, url_context=None, links=None):
    checks = []
    url_context = url_context or {}
    urls_path = os.path.join(artifacts_dir, 'urls.txt')
    raw = read_file(urls_path)
    if not raw.strip():
        checks.append(make_check('links_none', 'warn', 'No URLs found', 'urls.txt is empty or missing'))
        return checks

    urls = list(dict.fromkeys(line.strip() for line in raw.splitlines() if line.strip()))
    urls = urls[:50]

    def _ctx(u):
        """Look up the link context for a URL, trying exact match then prefix."""
        if u in url_context:
            return url_context[u]
        for href, ctx in url_context.items():
            if u.startswith(href) or href.startswith(u):
                return ctx
        return ''

    def _detail_with_ctx(base_detail, url):
        ctx = _ctx(url)
        if ctx:
            return f'{base_detail} (link text: "{ctx}")'
        return base_detail

    # Filter out tracking pixels
    non_pixel_urls = []
    for u in urls:
        if TRACKING_PIXEL_PATTERNS.search(u):
            continue
        non_pixel_urls.append(u)

    # Check for doubled-domain bugs across ALL urls (including pixels)
    for u in urls:
        if DOUBLED_DOMAIN_PATH_RE.search(u) or DOUBLED_DOMAIN_RE.search(u):
            checks.append(make_check('link_doubled_domain', 'fail',
                                     'Doubled-domain bug in URL',
                                     _detail_with_ctx('URL contains a doubled domain pattern', u), url=u))

    # Check for malformed URLs
    for u in non_pixel_urls:
        if not re.match(r'^https?://', u):
            checks.append(make_check('link_malformed', 'fail', 'Malformed URL', 'Not a valid http(s) URL', url=u))

    # Email tracking redirect domains — these commonly reject probes or expire
    TRACKING_DOMAINS = {'click.emails.skechers.com', 'click.link.adidas.com'}

    def is_tracking_domain(u):
        host = urlparse(u).hostname or ''
        return host in TRACKING_DOMAINS or host.startswith('click.')

    # Build the probe candidate set from real <a> hrefs when the HTML parsed.
    # urls.txt is a regex scrape of the raw HTML+text, so it also contains image
    # srcs, CSS urls and pixels — things no reader can click. Fall back to it
    # only for text-only emails or when parsing failed.
    if links:
        candidates = [
            l['href'] for l in links
            if re.match(r'^https?://', l['href'])
            and not TRACKING_PIXEL_PATTERNS.search(l['href'])
        ]
        anchor_derived = True
    else:
        candidates = non_pixel_urls
        anchor_derived = False

    # Separate tracking-domain URLs from probeable URLs
    probeable_urls = []
    tracking_skipped_count = 0
    seen_probeable = set()
    for u in candidates:
        if not re.match(r'^https?://', u):
            continue
        if is_tracking_domain(u):
            tracking_skipped_count += 1
        elif u not in seen_probeable:
            seen_probeable.add(u)
            probeable_urls.append(u)

    if tracking_skipped_count:
        checks.append(make_check('link_tracking_skipped', 'info',
                                 f'{tracking_skipped_count} tracking link(s) skipped',
                                 'Tracking/click-redirect domains — skipped HTTP probe'))

    # Rank by materiality and probe only the top slice. Probing every link in a
    # 50-link promo email costs more time than the caller allows and tells the
    # reviewer nothing about the offer the email is actually selling.
    if anchor_derived:
        anchor_links = [l for l in links if l['href'] in seen_probeable]
        probeable_urls, deprioritized = select_material_links(anchor_links, _MAX_PROBE)
    else:
        # Text-only fallback: no anchor context to rank by, so just cap.
        deprioritized = max(0, len(probeable_urls) - _MAX_PROBE)
        probeable_urls = probeable_urls[:_MAX_PROBE]

    if deprioritized:
        checks.append(make_check(
            'link_probe_scoped', 'info',
            f'{len(probeable_urls)} material link(s) probed, {deprioritized} skipped',
            'Probing is ranked by click likelihood (CTA text, button styling, '
            'repetition, position). Footer/utility and social links are '
            'deprioritized; an unsubscribe link is always included.'))

    # HTTP checks — parallel across hosts, per-domain throttle to avoid 429s,
    # and a hard wall-clock deadline so a slow host degrades coverage instead of
    # blowing the caller's timeout and discarding the entire report.
    deadline = time.monotonic() + _LINK_BUDGET_S
    timed_out = []

    def probe(url):
        if time.monotonic() >= deadline:
            return (url, None, 0, None)
        status, redirects, err = probe_url(url)
        return (url, status, redirects, err)

    with ThreadPoolExecutor(max_workers=max(1, _PROBE_WORKERS)) as pool:
        futures = {pool.submit(probe, u): u for u in probeable_urls}
        for fut in as_completed(futures):
            url, status, redirects, err = fut.result()
            if status is None and err is None:
                timed_out.append(url)
                continue
            tracking = False  # tracking domains already filtered out above
            if err and 'too many redirects' in err:
                checks.append(make_check('link_redirect_loop', 'warn' if tracking else 'fail',
                                         'Excessive redirects', _detail_with_ctx(f'>{redirects} redirects', url), url=url))
            elif err:
                severity = 'warn' if tracking else 'fail'
                checks.append(make_check('link_error', severity,
                                         'Link error', _detail_with_ctx(err[:150], url), url=url))
            elif status >= 500:
                checks.append(make_check('link_5xx', 'warn' if tracking else 'fail',
                                         f'Server error ({status})', _detail_with_ctx('', url), url=url))
            elif status == 429:
                checks.append(make_check('link_inconclusive', 'info',
                                         f'Rate limited ({status})',
                                         _detail_with_ctx('Server returned 429 — link may be valid', url), url=url))
            elif 400 <= status < 500 and tracking:
                checks.append(make_check('link_tracking_expired', 'warn',
                                         f'Tracking link returned {status}',
                                         _detail_with_ctx('Email tracking links commonly reject direct probes or expire', url), url=url))
            elif 400 <= status < 500:
                checks.append(make_check('link_4xx', 'fail', f'Broken link ({status})',
                                         _detail_with_ctx('', url), url=url))
            elif redirects > 5:
                checks.append(make_check('link_many_redirects', 'warn',
                                         f'{redirects} redirects', _detail_with_ctx('Excessive redirect chain', url), url=url))

    if timed_out:
        checks.append(make_check(
            'link_probe_timeout', 'info',
            f'{len(timed_out)} link(s) unprobed (time budget)',
            f'Probing stopped after {_LINK_BUDGET_S:.0f}s; these links were not '
            f'checked and are neither pass nor fail: ' + ', '.join(u[:80] for u in timed_out[:5])))

    # If no issues found, add a pass
    probed_count = len(probeable_urls) - len(timed_out)
    if not any(c['status'] != 'info' for c in checks):
        checks.append(make_check('links_ok', 'pass', 'All links valid',
                                 f'{probed_count} material link(s) checked, no issues'))

    return checks


# ---------------------------------------------------------------------------
# HTML context extraction (shared by link analysis + rendering)
# ---------------------------------------------------------------------------

class EmailHTMLParser(HTMLParser):
    """Extracts images, and builds a URL→context map from <a> tags."""
    def __init__(self):
        super().__init__()
        self.images = []          # list of {src, alt, ...}
        self.url_context = {}     # href → descriptive context string
        self.links = []           # ordered [{href, text, button_like}], repeats kept
        self._in_a = None         # current <a> attrs dict
        self._a_text = []         # text nodes inside current <a>
        self._a_imgs = []         # <img> tags inside current <a>

    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if tag == 'img':
            self.images.append(d)
            if self._in_a is not None:
                self._a_imgs.append(d)
        elif tag == 'a':
            self._in_a = d
            self._a_text = []
            self._a_imgs = []

    def handle_data(self, data):
        if self._in_a is not None:
            t = data.strip()
            if t:
                self._a_text.append(t)

    def handle_endtag(self, tag):
        if tag == 'a' and self._in_a is not None:
            href = self._in_a.get('href', '')
            text = ' '.join(self._a_text).strip()
            if not text and self._a_imgs:
                # Use first wrapped image's alt text, or derive from filename
                alt = (self._a_imgs[0].get('alt') or '').strip()
                if alt:
                    text = alt
                else:
                    src = self._a_imgs[0].get('src', '')
                    fname = src.split('/')[-1].split('?')[0][:40] if '/' in src else src[:40]
                    text = f'[image: {fname}]' if fname else '[image]'
            if href and text:
                self.url_context[href] = text[:80]
            if href:
                # Keep every occurrence (not deduped like url_context) — how
                # often a destination repeats is a materiality signal.
                self.links.append({
                    'href': href,
                    'text': text[:80],
                    'button_like': is_button_like(self._in_a) or bool(self._a_imgs),
                })
            self._in_a = None
            self._a_text = []
            self._a_imgs = []


def _img_label(img):
    """Short human-readable label for an <img> tag."""
    src = img.get('src', '')
    alt = (img.get('alt') or '').strip()
    # Derive a short filename from src
    fname = ''
    if '/' in src:
        fname = src.split('/')[-1].split('?')[0][:50]
    elif src:
        fname = src.split('?')[0][:50]
    if alt:
        return f'"{alt}" ({fname})' if fname else f'"{alt}"'
    return fname or src[:60]


def check_rendering(artifacts_dir, parsed_images=None):
    checks = []
    html_content = read_file(os.path.join(artifacts_dir, 'message.html'))
    text_content = read_file(os.path.join(artifacts_dir, 'message.txt'))

    images = parsed_images
    if images is None and html_content:
        parser = EmailHTMLParser()
        try:
            parser.feed(html_content)
        except Exception:
            pass
        images = parser.images

    if images:
        # Filter out tracking pixels from image checks
        content_images = [img for img in images if not TRACKING_PIXEL_PATTERNS.search(img.get('src', ''))]

        for img in content_images:
            src = img.get('src', '')
            alt = img.get('alt')
            label = _img_label(img)
            if alt is None or alt.strip() == '':
                checks.append(make_check('img_missing_alt', 'warn',
                                         f'Image missing alt text: {label}',
                                         f'src: {src[:120]}'))
            if src.startswith('http://'):
                checks.append(make_check('img_http', 'warn',
                                         f'Image uses http://: {label}',
                                         f'Non-HTTPS source may be blocked — src: {src[:120]}'))

    # Plain-text fallback
    if not text_content or len(text_content.strip()) < 50:
        checks.append(make_check('text_fallback_empty', 'fail', 'Plain-text fallback missing or too short',
                                 f'Text version is {len(text_content.strip())} chars'))
    elif text_content.strip():
        url_chars = sum(len(m) for m in re.findall(r'https?://\S+', text_content))
        total = len(text_content.strip())
        if total > 0 and url_chars / total > 0.70:
            checks.append(make_check('text_mostly_urls', 'warn', 'Plain-text is >70% URLs',
                                     f'{url_chars}/{total} chars are URLs'))

    if not checks:
        checks.append(make_check('rendering_ok', 'pass', 'Rendering checks passed', 'No issues found'))

    return checks


# ---------------------------------------------------------------------------
# 3. Personalization & Merge Validation
# ---------------------------------------------------------------------------

MERGE_TOKEN_RE = re.compile(r'%%[A-Za-z_]+%%|\{\{[A-Za-z_]+\}\}|\*\|[A-Z_]+\|\*|\{[A-Z_]+\}|\[%[A-Za-z_]+%\]')
EMPTY_GREETING_RE = re.compile(r'(?:Hi|Hello|Dear|Hey)\s*,', re.I)


def check_personalization(artifacts_dir):
    checks = []
    html_content = read_file(os.path.join(artifacts_dir, 'message.html'))
    text_content = read_file(os.path.join(artifacts_dir, 'message.txt'))
    combined = html_content + '\n' + text_content

    # Raw merge tokens
    tokens = MERGE_TOKEN_RE.findall(combined)
    if tokens:
        unique = list(dict.fromkeys(tokens))
        checks.append(make_check('merge_raw_token', 'fail', f'{len(unique)} raw merge token(s) found',
                                 ', '.join(unique[:10])))

    # Doubled-domain merge errors in URLs
    urls = re.findall(r'https?://[^\s"\'<>]+', combined)
    for u in urls:
        if DOUBLED_DOMAIN_PATH_RE.search(u) or DOUBLED_DOMAIN_RE.search(u):
            checks.append(make_check('merge_doubled_domain', 'fail',
                                     'Doubled-domain merge error in URL',
                                     'URL contains a repeated domain', url=u))

    # Empty greeting slots
    if EMPTY_GREETING_RE.search(combined):
        checks.append(make_check('merge_empty_greeting', 'fail', 'Empty greeting slot',
                                 'Greeting has empty name field (e.g. "Hi ,")'))

    if not checks:
        checks.append(make_check('personalization_ok', 'pass', 'No merge issues', 'No raw tokens or empty slots'))

    return checks


# ---------------------------------------------------------------------------
# 4. Compliance & Deliverability
# ---------------------------------------------------------------------------

def check_compliance(artifacts_dir):
    checks = []
    msg_path = os.path.join(artifacts_dir, 'message.json')
    html_content = read_file(os.path.join(artifacts_dir, 'message.html'))
    text_content = read_file(os.path.join(artifacts_dir, 'message.txt'))
    combined = html_content + '\n' + text_content

    headers = {}
    try:
        msg = json.loads(read_file(msg_path))
        # Headers may be stored under 'headers' key or at top level
        if 'headers' in msg and isinstance(msg['headers'], dict):
            headers = {k.lower(): v for k, v in msg['headers'].items()}
        elif 'headers' in msg and isinstance(msg['headers'], list):
            for h in msg['headers']:
                if isinstance(h, dict) and 'name' in h:
                    headers[h['name'].lower()] = h.get('value', '')
                elif isinstance(h, str) and ':' in h:
                    k, _, v = h.partition(':')
                    headers[k.strip().lower()] = v.strip()
    except (json.JSONDecodeError, KeyError):
        pass

    # List-Unsubscribe header
    unsub_header = headers.get('list-unsubscribe', '')
    if unsub_header:
        if 'mailto:' in unsub_header.lower() or 'https:' in unsub_header.lower() or 'http:' in unsub_header.lower():
            checks.append(make_check('header_list_unsub', 'pass', 'List-Unsubscribe header present',
                                     unsub_header[:200]))
        else:
            checks.append(make_check('header_list_unsub_invalid', 'warn',
                                     'List-Unsubscribe header present but may be invalid',
                                     unsub_header[:200]))
    else:
        checks.append(make_check('header_list_unsub_missing', 'warn', 'List-Unsubscribe header not found',
                                 'Header may not be captured by AgentMail relay'))

    # List-Unsubscribe-Post (RFC 8058)
    if headers.get('list-unsubscribe-post', ''):
        checks.append(make_check('header_one_click', 'pass', 'One-click unsubscribe header present',
                                 headers['list-unsubscribe-post'][:200]))
    else:
        checks.append(make_check('header_one_click_missing', 'warn',
                                 'List-Unsubscribe-Post header not found (RFC 8058)',
                                 'One-click unsubscribe may not be supported'))

    # CAN-SPAM physical address
    address_re = re.compile(r'\d{1,6}\s+[A-Za-z0-9\s,.]+(?:Street|St|Avenue|Ave|Blvd|Boulevard|Drive|Dr|Road|Rd|Lane|Ln|Way|Pkwy|Parkway|Place|Pl|Court|Ct)\b', re.I)
    if address_re.search(combined):
        checks.append(make_check('canspam_address', 'pass', 'Physical address found in body', ''))
    else:
        checks.append(make_check('canspam_address_missing', 'warn', 'No physical address detected',
                                 'CAN-SPAM requires a physical mailing address'))

    # Unsubscribe link in body
    unsub_link_re = re.compile(r'<a\s[^>]*href\s*=\s*["\'][^"\']*["\'][^>]*>.*?(?:unsubscribe|preference|opt[\s-]*out).*?</a>', re.I | re.S)
    unsub_text_re = re.compile(r'unsubscribe|opt[\s-]*out|email preferences', re.I)
    if unsub_link_re.search(html_content):
        checks.append(make_check('body_unsub_link', 'pass', 'Unsubscribe link found in body', ''))
    elif unsub_text_re.search(combined):
        checks.append(make_check('body_unsub_text', 'pass', 'Unsubscribe text found in body',
                                 'Text reference found but link tag not confirmed'))
    else:
        checks.append(make_check('body_unsub_missing', 'fail', 'No unsubscribe link found in body',
                                 'CAN-SPAM requires a visible opt-out mechanism'))

    # Authentication-Results
    auth_results = headers.get('authentication-results', '')
    if auth_results:
        checks.append(make_check('auth_results', 'pass', 'Authentication-Results header present',
                                 auth_results[:200]))
    else:
        checks.append(make_check('auth_results_missing', 'warn',
                                 'Authentication-Results header not found',
                                 'Expected via AgentMail relay — SPF/DKIM status unknown'))

    return checks


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def tally(checks):
    p = sum(1 for c in checks if c['status'] == 'pass')
    w = sum(1 for c in checks if c['status'] == 'warn')
    f = sum(1 for c in checks if c['status'] == 'fail')
    i = sum(1 for c in checks if c['status'] == 'info')
    result = {'passed': p, 'warned': w, 'failed': f, 'checks': checks}
    if i:
        result['info'] = i
    return result


CATEGORY_MAP = {
    # Broken Experience
    'link_4xx': 'broken_experience',
    'link_5xx': 'broken_experience',
    'link_error': 'broken_experience',
    'link_redirect_loop': 'broken_experience',
    'link_doubled_domain': 'broken_experience',
    'link_malformed': 'broken_experience',
    'link_many_redirects': 'broken_experience',
    'links_none': 'broken_experience',
    'merge_raw_token': 'broken_experience',
    'merge_empty_greeting': 'broken_experience',
    'merge_doubled_domain': 'broken_experience',
    # Compliance
    'canspam_address': 'compliance',
    'canspam_address_missing': 'compliance',
    'body_unsub_link': 'compliance',
    'body_unsub_text': 'compliance',
    'body_unsub_missing': 'compliance',
    'header_list_unsub': 'compliance',
    'header_list_unsub_missing': 'compliance',
    'header_list_unsub_invalid': 'compliance',
    'header_one_click': 'compliance',
    'header_one_click_missing': 'compliance',
    # Deliverability
    'auth_results': 'deliverability',
    'auth_results_missing': 'deliverability',
    'text_fallback_empty': 'deliverability',
    'text_mostly_urls': 'deliverability',
    # Info (not counted in summary)
    'img_http': 'info',
    'img_missing_alt': 'info',
    'link_tracking_skipped': 'info',
    'link_probe_scoped': 'info',
    'link_probe_timeout': 'info',
    'link_tracking_expired': 'info',
    'link_inconclusive': 'info',
    # Pass-through (old pass markers)
    'links_ok': 'broken_experience',
    'rendering_ok': 'deliverability',
    'personalization_ok': 'broken_experience',
}


def run_all(artifacts_dir):
    # Parse HTML once, share results across checks
    html_content = read_file(os.path.join(artifacts_dir, 'message.html'))
    parser = EmailHTMLParser()
    if html_content:
        try:
            parser.feed(html_content)
        except Exception:
            pass

    # Gather all checks from all functions
    all_checks = []
    all_checks.extend(check_links(artifacts_dir, url_context=parser.url_context,
                                  links=parser.links))
    all_checks.extend(check_rendering(artifacts_dir, parsed_images=parser.images))
    all_checks.extend(check_personalization(artifacts_dir))
    all_checks.extend(check_compliance(artifacts_dir))

    # Classify into new business-impact categories
    buckets = {
        'broken_experience': [],
        'compliance': [],
        'deliverability': [],
        'info': [],
    }
    for check in all_checks:
        cat = CATEGORY_MAP.get(check['check_id'], 'info')
        buckets[cat].append(check)

    categories = {}
    for cat_name in ['broken_experience', 'compliance', 'deliverability', 'info']:
        checks = buckets[cat_name]
        if checks:
            categories[cat_name] = tally(checks)

    # Summary excludes info category
    actionable = {k: v for k, v in categories.items() if k != 'info'}
    total_checks = sum(c['passed'] + c['warned'] + c['failed'] for c in actionable.values())
    total_pass = sum(c['passed'] for c in actionable.values())
    total_warn = sum(c['warned'] for c in actionable.values())
    total_fail = sum(c['failed'] for c in actionable.values())
    pass_rate = f"{round(total_pass / total_checks * 100)}%" if total_checks else "0%"

    report = {
        'categories': categories,
        'summary': {
            'overall_pass_rate': pass_rate,
            'total_checks': total_checks,
            'total_issues': total_fail,
            'total_warnings': total_warn,
        }
    }
    return report


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python3 qa_checks.py <artifacts-dir>', file=sys.stderr)
        sys.exit(1)

    artifacts_dir = sys.argv[1]
    if not os.path.isdir(artifacts_dir):
        print(f'Error: {artifacts_dir} is not a directory', file=sys.stderr)
        sys.exit(1)

    report = run_all(artifacts_dir)
    out_path = os.path.join(artifacts_dir, 'qa-report.json')
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2)
    print(out_path)
