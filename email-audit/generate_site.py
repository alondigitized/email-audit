#!/usr/bin/env python3
"""Generate the email-audit static site from published-audits.json manifest.

Three-phase pipeline:
  Phase 1 — Extract: parse raw artifacts into audit-data.json per audit
  Phase 2 — Render:  read audit-data.json, produce HTML pages + index
  Phase 3 — Copy:    copy asset files (PNGs, PDFs) to output directory
"""

import html
import json
import os
import re
import shutil
import sys
from datetime import datetime, timezone

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
MANIFEST = os.path.join(SCRIPT_DIR, "published-audits.json")
AUDITS_DIR = os.path.join(SCRIPT_DIR, "audits")
ASSETS_DIR = os.path.join(SCRIPT_DIR, "assets")

# Site-level branding — edit here to rename everywhere
SITE_TITLE = "Experience Review"
SITE_BRAND = "Skechers Digital"
SITE_BRAND_DETAIL = "Skechers Experience Review"
SITE_DESCRIPTION = (
    "AI-powered reviews of brand experiences\u2009—\u2009from marketing emails to website visits. "
    "Each review scores creative quality, technical health, accessibility, and deliverability, "
    "with actionable recommendations and automated QA results."
)
CSS_VERSION = "5"

GATE_HTML = """\
<div id="gate" style="display:none;position:fixed;inset:0;z-index:9999;background:#faf8f5;align-items:center;justify-content:center;flex-direction:column;font-family:Inter,Arial,sans-serif">
<div style="background:#fff;border:1px solid #e5e7eb;border-radius:20px;padding:40px;max-width:360px;width:90%;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.04)">
<h2 style="margin:0 0 8px;color:#1f2937">{SITE_TITLE}</h2>
<p style="color:#6b7280;margin:0 0 20px;font-size:14px">Enter the shared secret to continue.</p>
<input id="gate-in" type="password" placeholder="Shared secret" style="width:100%;padding:10px 14px;border:1px solid #e5e7eb;border-radius:10px;font-size:15px;margin-bottom:12px;box-sizing:border-box;outline:none">
<button id="gate-btn" style="width:100%;padding:10px;background:#111827;color:#fff;border:none;border-radius:10px;font-size:15px;cursor:pointer">Unlock</button>
<p id="gate-err" style="display:none;color:#dc2626;margin:10px 0 0;font-size:13px">Incorrect. Try again.</p>
</div></div>"""

GATE_SCRIPT = """\
<script>
(function(){
  var H="757c546ab810a1d100318289824c5e27cc18579546d60eaa8bf847af530a827f";
  if(sessionStorage.getItem("_ga")==="1"){document.documentElement.classList.add("ok");return;}
  var o=document.getElementById("gate");if(!o)return;o.style.display="flex";
  document.getElementById("gate-btn").onclick=async function(){
    var v=document.getElementById("gate-in").value;
    var e=new TextEncoder().encode(v);
    var h=await crypto.subtle.digest("SHA-256",e);
    var a=Array.from(new Uint8Array(h)).map(function(b){return b.toString(16).padStart(2,"0")}).join("");
    if(a===H){sessionStorage.setItem("_ga","1");document.documentElement.classList.add("ok");o.style.display="none";}
    else{document.getElementById("gate-err").style.display="block";document.getElementById("gate-in").value="";}
  };
  document.getElementById("gate-in").addEventListener("keydown",function(e){if(e.key==="Enter")document.getElementById("gate-btn").click();});
})();
</script>"""


# ---------------------------------------------------------------------------
# Shared utilities
# ---------------------------------------------------------------------------

def esc(text):
    """HTML-escape text."""
    return html.escape(str(text), quote=True)


def load_json(path):
    if not os.path.exists(path):
        return None
    with open(path, "r") as f:
        return json.load(f)


def read_file(path):
    if not os.path.exists(path):
        return ""
    with open(path, "r") as f:
        return f.read()


# ===========================================================================
# Phase 1 — Extract: raw artifacts → audit-data.json
# ===========================================================================

def extract_score(review_text):
    """Extract the business impact score like '6 / 10' or '6/10' from review text."""
    m = re.search(r"\*\*(\d+(?:\.\d+)?)\s*/\s*10\*\*", review_text)
    if m:
        return m.group(1) + "/10"
    m = re.search(r"(\d+(?:\.\d+)?)\s*/\s*10", review_text)
    if m:
        return m.group(1) + "/10"
    return "\u2014"


def parse_timestamp(msg):
    """Extract datetime from message.json."""
    ts = msg.get("timestamp") or msg.get("created_at") or ""
    if ts:
        try:
            return datetime.fromisoformat(ts.replace("Z", "+00:00"))
        except Exception:
            pass
    return None


def parse_display_name(from_addr):
    """Extract just the display name from 'Name <email>' format."""
    if not from_addr:
        return "Unknown"
    m = re.match(r'^"?([^"<]+)"?\s*<', from_addr)
    if m:
        return m.group(1).strip()
    return from_addr


def strip_preamble(review_text):
    """Strip preamble text before the first --- separator (tool output leaking in)."""
    stripped = review_text.lstrip()
    if stripped and not stripped.startswith("**WALKER") and not stripped.startswith("##"):
        idx = review_text.find("\n---\n")
        if idx != -1:
            review_text = review_text[idx + 5:]
    return review_text


def parse_review_sections(review_text):
    """Parse review.txt into structured sections for downstream consumers (e.g. PDF).

    Returns a dict with section name keys mapping to lists of content lines.
    """
    sections = {
        "executive_summary": [],
        "business_impact_score": [],
        "whats_working": [],
        "whats_weak": [],
        "recommendations": [],
        "bottom_line": [],
        "evidence": [],
    }
    current = "executive_summary"

    for raw in review_text.splitlines():
        line = raw.strip()
        if not line or line == "---":
            continue
        if line.startswith("**WALKER AUDIT") or line.startswith("*Received:"):
            continue

        # Detect section headers: ## N. Title or ### Title
        cleaned = re.sub(r"^#{1,3}\s*\d*\.?\s*", "", line).strip().lower().rstrip(":")
        if cleaned == "executive summary":
            current = "executive_summary"; continue
        if cleaned in ("business impact score", "business impact"):
            current = "business_impact_score"; continue
        if cleaned in ("what's working", "what\u2019s working", "what works"):
            current = "whats_working"; continue
        if cleaned in ("what's weak", "what\u2019s weak", "what is weak"):
            current = "whats_weak"; continue
        if cleaned.startswith("recommendation"):
            current = "recommendations"; continue
        if cleaned == "bottom line":
            current = "bottom_line"; continue
        if cleaned in ("evidence", "evidence & analysis", "evidence and analysis"):
            current = "evidence"; continue

        # Skip bare section header lines (already handled above)
        if re.match(r"^#{1,3}\s", line):
            continue

        sections[current].append(line)

    return sections


def build_audit_data(entry, msg, review_text, qa_report, slug):
    """Assemble the complete audit-data.json structure from raw artifacts."""
    from_addr = msg.get("from_") or msg.get("from") or "Unknown"
    dt = parse_timestamp(msg)
    cleaned_review = strip_preamble(review_text)

    artifact_dir = entry.get("artifactDir", "")
    render_exists = os.path.exists(
        os.path.join(artifact_dir, "email-webview-render.png")
    )
    pdf_path = entry.get("pdfPath", "")
    pdf_exists = bool(pdf_path) and os.path.exists(pdf_path)

    webview_url = read_file(os.path.join(artifact_dir, "webview-url.txt")).strip()

    return {
        "schema_version": 1,
        "slug": slug,
        "email": {
            "subject": msg.get("subject", "Untitled"),
            "from": from_addr,
            "from_display_name": parse_display_name(from_addr),
            "timestamp_iso": dt.isoformat() if dt else None,
            "date_formatted": dt.strftime("%Y-%m-%d %H:%M UTC") if dt else "Unknown",
        },
        "review": {
            "score": extract_score(review_text),
            "raw_markdown": cleaned_review,
            "sections": parse_review_sections(cleaned_review),
        },
        "qa": qa_report,
        "assets": {
            "render_image": f"{slug}-email-webview-render.png" if render_exists else None,
            "pdf": f"{slug}-review.pdf" if pdf_exists else None,
            "webview_url": webview_url or None,
        },
    }


def is_stale(audit_data_path, artifact_dir):
    """Check whether audit-data.json needs regeneration."""
    if not os.path.exists(audit_data_path):
        return True
    ad_mtime = os.path.getmtime(audit_data_path)
    for name in ("message.json", "review.txt", "qa-report.json"):
        src = os.path.join(artifact_dir, name)
        if os.path.exists(src) and os.path.getmtime(src) > ad_mtime:
            return True
    return False


def extract_all(manifest):
    """Phase 1: For each manifest entry, produce audit-data.json from raw artifacts."""
    for entry in manifest:
        slug = entry.get("slug", "")
        artifact_dir = entry.get("artifactDir", "")
        if not artifact_dir or not os.path.isdir(artifact_dir):
            continue

        audit_data_path = os.path.join(artifact_dir, "audit-data.json")
        if not is_stale(audit_data_path, artifact_dir):
            continue

        msg = load_json(os.path.join(artifact_dir, "message.json")) or {}
        review_text = read_file(os.path.join(artifact_dir, "review.txt"))
        qa_report = load_json(os.path.join(artifact_dir, "qa-report.json"))

        audit_data = build_audit_data(entry, msg, review_text, qa_report, slug)

        with open(audit_data_path, "w") as f:
            json.dump(audit_data, f, indent=2, ensure_ascii=False)


# ===========================================================================
# Phase 2 — Render: audit-data.json → HTML
# ===========================================================================

def inline_format(text):
    """Convert inline markdown (bold, code) to HTML."""
    text = esc(text)
    # Bold: **text**
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    # Code: `text`
    text = re.sub(r"`(.+?)`", r"<code>\1</code>", text)
    return text


def review_to_html(review_text):
    """Convert markdown-ish review text to HTML sections."""
    lines = review_text.split("\n")
    out = []
    in_list = False

    for line in lines:
        stripped = line.strip()

        # Skip the title header and separator lines
        if stripped.startswith("**WALKER AUDIT") or stripped == "---" or stripped.startswith("*Received:"):
            continue

        # Section headers: ## N. Title
        m = re.match(r"^##\s*\d+\.\s*(.+)", stripped)
        if m:
            if in_list:
                out.append("</ul>")
                in_list = False
            out.append(f'</div><div class="section"><h2>{esc(m.group(1))}</h2>')
            continue

        # Sub-headers: ### Title
        m = re.match(r"^###\s*(.+)", stripped)
        if m:
            if in_list:
                out.append("</ul>")
                in_list = False
            out.append(f"<h3>{esc(m.group(1))}</h3>")
            continue

        # Bullet points
        m = re.match(r"^[-*]\s+(.+)", stripped)
        if m:
            if not in_list:
                out.append("<ul>")
                in_list = True
            content = inline_format(m.group(1))
            out.append(f"<li>{content}</li>")
            continue

        # Empty lines
        if not stripped:
            if in_list:
                out.append("</ul>")
                in_list = False
            continue

        # Regular paragraph
        if in_list:
            out.append("</ul>")
            in_list = False
        out.append(f"<p>{inline_format(stripped)}</p>")

    if in_list:
        out.append("</ul>")

    result = "".join(out)
    # Clean up leading empty div close
    if result.startswith("</div>"):
        result = result[6:]
    return result


def qa_card_html(qa_data):
    """Build the QA card HTML from qa data."""
    if not qa_data:
        return ""

    summary = qa_data.get("summary", {})
    categories = qa_data.get("categories", {})

    pass_rate = summary.get("overall_pass_rate", "?")
    total_issues = summary.get("total_issues", 0)
    total_warnings = summary.get("total_warnings", 0)

    parts = [
        '<div class="qa-card"><h2>Automated QA</h2>',
        '<div class="qa-summary">',
        f'<span>Pass rate: <strong>{esc(str(pass_rate))}</strong></span>',
        f'<span class="qa-fail">Issues: {total_issues}</span>',
        f'<span class="qa-warn">Warnings: {total_warnings}</span>',
        "</div>",
    ]

    for cat_name, cat_data in categories.items():
        checks = cat_data.get("checks", [])
        non_pass = [c for c in checks if c.get("status") != "pass"]
        if not non_pass:
            continue

        label = cat_name.replace("_", " ").title()
        parts.append(f'<div class="qa-cat"><h3>{esc(label)}</h3>')
        parts.append('<table class="qa-table">')

        for c in non_pass:
            status = c.get("status", "warn")
            icon_class = "qa-fail" if status == "fail" else "qa-warn"
            icon = "\u2718" if status == "fail" else "\u26a0"
            detail = esc(c.get("detail", ""))
            url = c.get("url", "")
            if url:
                detail += f'<br><span class="muted" style="font-size:11px;word-break:break-all">{esc(url)}</span>'
            parts.append(
                f'<tr><td><span class="{icon_class}">{icon}</span></td>'
                f'<td>{esc(c.get("label", ""))}</td>'
                f"<td>{detail}</td></tr>"
            )

        parts.append("</table></div>")

    parts.append("</div>")
    return "".join(parts)


def qa_badge(qa_data):
    """Return HTML badge for QA summary (for index cards)."""
    if not qa_data:
        return ""
    summary = qa_data.get("summary", {})
    issues = summary.get("total_issues", 0)
    warnings = summary.get("total_warnings", 0)
    if issues == 0 and warnings == 0:
        return '<span class="qa-badge qa-badge-ok">All pass</span>'

    parts = []
    if issues == 1:
        parts.append("1 issue")
    elif issues > 1:
        parts.append(f"{issues} issues")
    if warnings == 1:
        parts.append("1 warn")
    elif warnings > 1:
        parts.append(f"{warnings} warn")

    badge_class = "qa-badge-issues" if issues > 0 else "qa-badge-ok"
    return f'<span class="qa-badge {badge_class}">{", ".join(parts)}</span>'


def build_audit_page(audit_data):
    """Build a full audit detail HTML page from structured audit data."""
    email = audit_data["email"]
    review = audit_data["review"]
    assets = audit_data["assets"]

    subject = email["subject"]
    from_addr = email["from"]
    date_str = email["date_formatted"]
    score = review["score"]

    review_html = review_to_html(review["raw_markdown"])
    qa_html = qa_card_html(audit_data["qa"])

    render_img_name = assets.get("render_image")

    # Build layout: 2-column grid only when image exists
    if render_img_name:
        content_block = (
            f'<div class="layout"><div class="card">'
            f"{review_html}"
            f"</div>"
            f'<div><img class="image" src="../assets/{esc(render_img_name)}" '
            f'alt="Email webview render"></div>'
            f"</div>"
        )
    else:
        content_block = (
            f'<div class="card">'
            f"{review_html}"
            f"</div>"
        )

    page = (
        f'<!doctype html><html><head><meta charset="utf-8">'
        f'<meta name="viewport" content="width=device-width,initial-scale=1">'
        f"<title>{esc(subject)}</title>"
        f'<link rel="stylesheet" href="../styles.css?v={CSS_VERSION}"></head><body>'
        f"{GATE_HTML}"
        f'<main><p><a href="../index.html">\u2190 Back to all reviews</a></p>'
        f'<div class="hero hero-detail"><div class="muted">{SITE_BRAND_DETAIL}</div>'
        f"<h1>{esc(subject)}</h1>"
        f'<table class="meta-table">'
        f'<tr><td class="meta-label">From</td><td>{esc(from_addr)}</td></tr>'
        f'<tr><td class="meta-label">Received</td><td>{esc(date_str)}</td></tr>'
        f'<tr><td class="meta-label">Score</td><td><span class="score">{esc(score)}</span></td></tr>'
        f"</table></div>"
        f"{content_block}"
        f"{qa_html}"
        f"</main>"
        f"{GATE_SCRIPT}</body></html>"
    )
    return page


def build_index(all_audit_data):
    """Build the index.html page with audit cards."""
    cards = []
    for ad in all_audit_data:
        email = ad["email"]
        ts_iso = email.get("timestamp_iso")
        if ts_iso:
            try:
                dt = datetime.fromisoformat(ts_iso)
            except Exception:
                dt = None
        else:
            dt = None
        date_str = dt.strftime("%b %-d, %Y") if dt else "\u2014"
        subject = esc(email["subject"])
        score = esc(ad["review"]["score"])
        badge = qa_badge(ad["qa"])
        slug = ad["slug"]
        from_name = esc(email.get("from_display_name", "Unknown"))

        cards.append(
            f'<a class="audit-card" href="audits/{slug}.html">'
            f'<span class="audit-card-top">'
            f'<span class="audit-card-title">{subject}</span>'
            f'<span class="score">{score}</span>'
            f"</span>"
            f'<span class="audit-card-meta">'
            f'<span class="meta-item">{from_name}</span>'
            f'<span class="meta-sep">&middot;</span>'
            f'<span class="meta-item">{date_str}</span>'
            f"{badge}"
            f"</span></a>"
        )

    cards_html = "".join(cards)

    page = (
        f'<!doctype html><html><head><meta charset="utf-8">'
        f'<meta name="viewport" content="width=device-width,initial-scale=1">'
        f"<title>{SITE_TITLE}</title>"
        f'<link rel="stylesheet" href="styles.css?v={CSS_VERSION}"></head><body>'
        f"{GATE_HTML}"
        f'<main><div class="hero"><div class="muted">{SITE_BRAND}</div>'
        f"<h1>{SITE_TITLE}</h1>"
        f'<p class="hero-desc">{SITE_DESCRIPTION}</p>'
        f'</div><div class="audit-list">'
        f"{cards_html}"
        f"</div></main>"
        f"{GATE_SCRIPT}</body></html>"
    )
    return page


def render_all(manifest):
    """Phase 2: Read audit-data.json for each entry, produce HTML pages + index."""
    os.makedirs(AUDITS_DIR, exist_ok=True)

    all_audit_data = []

    for entry in manifest:
        slug = entry.get("slug", "")
        artifact_dir = entry.get("artifactDir", "")
        if not artifact_dir or not os.path.isdir(artifact_dir):
            print(f"Skipping {slug}: artifact dir not found at {artifact_dir}", file=sys.stderr)
            continue

        audit_data = load_json(os.path.join(artifact_dir, "audit-data.json"))
        if not audit_data:
            print(f"Skipping {slug}: audit-data.json not found", file=sys.stderr)
            continue

        # Generate audit page
        page = build_audit_page(audit_data)
        with open(os.path.join(AUDITS_DIR, f"{slug}.html"), "w") as f:
            f.write(page)

        all_audit_data.append(audit_data)

    # Sort by timestamp descending for index
    def sort_key(ad):
        ts = ad["email"].get("timestamp_iso")
        if ts:
            try:
                return datetime.fromisoformat(ts)
            except Exception:
                pass
        return datetime.min.replace(tzinfo=timezone.utc)

    all_audit_data.sort(key=sort_key, reverse=True)

    # Generate index
    index_html = build_index(all_audit_data)
    with open(os.path.join(SCRIPT_DIR, "index.html"), "w") as f:
        f.write(index_html)

    return len(all_audit_data)


# ===========================================================================
# Phase 3 — Copy assets
# ===========================================================================

def copy_assets(manifest):
    """Phase 3: Copy render PNGs and review PDFs to the assets directory."""
    os.makedirs(ASSETS_DIR, exist_ok=True)

    for entry in manifest:
        slug = entry.get("slug", "")
        artifact_dir = entry.get("artifactDir", "")
        pdf_path = entry.get("pdfPath", "")

        if not artifact_dir or not os.path.isdir(artifact_dir):
            continue

        render_src = os.path.join(artifact_dir, "email-webview-render.png")
        if os.path.exists(render_src):
            shutil.copy2(render_src, os.path.join(ASSETS_DIR, f"{slug}-email-webview-render.png"))

        if pdf_path and os.path.exists(pdf_path):
            shutil.copy2(pdf_path, os.path.join(ASSETS_DIR, f"{slug}-review.pdf"))


# ===========================================================================
# Main
# ===========================================================================

def main():
    manifest = load_json(MANIFEST)
    if not manifest:
        print("No published-audits.json found or empty.", file=sys.stderr)
        sys.exit(1)

    extract_all(manifest)
    count = render_all(manifest)
    copy_assets(manifest)

    print(f"Generated {count} audit pages + index.html")


if __name__ == "__main__":
    main()
