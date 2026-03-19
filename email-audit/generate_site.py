#!/usr/bin/env python3
"""Generate the email-audit static site from published-audits.json manifest.

Reads each audit's artifact directory (review.txt, message.json, qa-report.json),
produces per-audit HTML pages under audits/, copies assets (PDFs, render PNGs),
and generates the index.html table.
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

GATE_HTML = """\
<div id="gate" style="display:none;position:fixed;inset:0;z-index:9999;background:#faf8f5;align-items:center;justify-content:center;flex-direction:column;font-family:Inter,Arial,sans-serif">
<div style="background:#fff;border:1px solid #e5e7eb;border-radius:20px;padding:40px;max-width:360px;width:90%;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.04)">
<h2 style="margin:0 0 8px;color:#1f2937">Email Audit</h2>
<p style="color:#6b7280;margin:0 0 20px;font-size:14px">Enter the shared secret to continue.</p>
<input id="gate-in" type="password" placeholder="Shared secret" style="width:100%;padding:10px 14px;border:1px solid #e5e7eb;border-radius:10px;font-size:15px;margin-bottom:12px;box-sizing:border-box;outline:none">
<button id="gate-btn" style="width:100%;padding:10px;background:#111827;color:#fff;border:none;border-radius:10px;font-size:15px;cursor:pointer">Unlock</button>
<p id="gate-err" style="display:none;color:#dc2626;margin:10px 0 0;font-size:13px">Incorrect. Try again.</p>
</div></div>"""

GATE_SCRIPT = """\
<script>
(function(){
  var H="50a34207d6767ecb822d4e8e8b1e2e3075cc97fae54419cd063887f505cf697a";
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


def extract_score(review_text):
    """Extract the business impact score like '6 / 10' or '6/10' from review text."""
    m = re.search(r"\*\*(\d+(?:\.\d+)?)\s*/\s*10\*\*", review_text)
    if m:
        return m.group(1) + "/10"
    m = re.search(r"(\d+(?:\.\d+)?)\s*/\s*10", review_text)
    if m:
        return m.group(1) + "/10"
    return "—"


def parse_timestamp(msg):
    """Extract datetime from message.json."""
    ts = msg.get("timestamp") or msg.get("created_at") or ""
    if ts:
        try:
            return datetime.fromisoformat(ts.replace("Z", "+00:00"))
        except Exception:
            pass
    return None


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


def inline_format(text):
    """Convert inline markdown (bold, code) to HTML."""
    text = esc(text)
    # Bold: **text**
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    # Code: `text`
    text = re.sub(r"`(.+?)`", r"<code>\1</code>", text)
    return text


def qa_card_html(qa_report):
    """Build the QA card HTML from qa-report.json data."""
    if not qa_report:
        return ""

    summary = qa_report.get("summary", {})
    categories = qa_report.get("categories", {})

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
            icon = "✘" if status == "fail" else "⚠"
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


def qa_badge(qa_report):
    """Return HTML badge for QA summary (for index table)."""
    if not qa_report:
        return ""
    summary = qa_report.get("summary", {})
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


def build_audit_page(entry, msg, review_text, qa_report, render_img_name):
    """Build a full audit detail HTML page."""
    subject = msg.get("subject", "Untitled")
    from_addr = msg.get("from_") or msg.get("from") or "Unknown"
    dt = parse_timestamp(msg)
    date_str = dt.strftime("%Y-%m-%d %H:%M UTC") if dt else "Unknown"
    score = extract_score(review_text)

    review_html = review_to_html(review_text)
    qa_html = qa_card_html(qa_report)

    # Build layout: review content on left, optional render image on right
    layout_right = ""
    if render_img_name:
        layout_right = (
            f'<div><img class="image" src="../assets/{esc(render_img_name)}" '
            f'alt="Email webview render"></div>'
        )

    page = (
        f'<!doctype html><html><head><meta charset="utf-8">'
        f'<meta name="viewport" content="width=device-width,initial-scale=1">'
        f"<title>{esc(subject)}</title>"
        f'<link rel="stylesheet" href="../styles.css"></head><body>'
        f"{GATE_HTML}"
        f'<main><p><a href="../index.html">\u2190 Back to all audits</a></p>'
        f'<div class="hero"><div class="muted">Skechers Email Audit</div>'
        f"<h1>{esc(subject)}</h1>"
        f'<table class="meta-table">'
        f'<tr><td class="meta-label">From</td><td>{esc(from_addr)}</td></tr>'
        f'<tr><td class="meta-label">Received</td><td>{esc(date_str)}</td></tr>'
        f'<tr><td class="meta-label">Score</td><td><span class="score">{esc(score)}</span></td></tr>'
        f"</table></div>"
        f'<div class="layout"><div class="card">'
        f"{review_html}"
        f"</div>"
        f"{layout_right}"
        f"</div>"
        f"{qa_html}"
        f"</main>"
        f"{GATE_SCRIPT}</body></html>"
    )
    return page


def parse_display_name(from_addr):
    """Extract just the display name from 'Name <email>' format."""
    if not from_addr:
        return "Unknown"
    m = re.match(r'^"?([^"<]+)"?\s*<', from_addr)
    if m:
        return m.group(1).strip()
    return from_addr


def build_index(entries_data):
    """Build the index.html page with audit cards."""
    cards = []
    for ed in entries_data:
        dt = ed["dt"]
        date_str = dt.strftime("%b %-d, %Y") if dt else "—"
        subject = esc(ed["subject"])
        score = esc(ed["score"])
        badge = ed["qa_badge"]
        slug = ed["slug"]
        from_name = esc(ed.get("from_name", "Unknown"))

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
        f"<title>Email Audit</title>"
        f'<link rel="stylesheet" href="styles.css?v=4"></head><body>'
        f"{GATE_HTML}"
        f'<main><div class="hero"><div class="muted">Skechers Digital</div>'
        f"<h1>Email Audit</h1>"
        f'<p class="muted">Homepage index of conducted email audits, with links to detailed audit pages.</p>'
        f'</div><div class="audit-list">'
        f"{cards_html}"
        f"</div></main>"
        f"{GATE_SCRIPT}</body></html>"
    )
    return page


def main():
    manifest = load_json(MANIFEST)
    if not manifest:
        print("No published-audits.json found or empty.", file=sys.stderr)
        sys.exit(1)

    os.makedirs(AUDITS_DIR, exist_ok=True)
    os.makedirs(ASSETS_DIR, exist_ok=True)

    entries_data = []

    for entry in manifest:
        slug = entry.get("slug", "")
        artifact_dir = entry.get("artifactDir", "")
        pdf_path = entry.get("pdfPath", "")
        subject = entry.get("subject", "Untitled")

        if not artifact_dir or not os.path.isdir(artifact_dir):
            print(f"Skipping {slug}: artifact dir not found at {artifact_dir}", file=sys.stderr)
            continue

        msg = load_json(os.path.join(artifact_dir, "message.json")) or {}
        review_text = read_file(os.path.join(artifact_dir, "review.txt"))
        qa_report = load_json(os.path.join(artifact_dir, "qa-report.json"))

        # Copy assets: render PNG and PDF
        render_img_name = None
        render_src = os.path.join(artifact_dir, "email-webview-render.png")
        if os.path.exists(render_src):
            render_img_name = f"{slug}-email-webview-render.png"
            shutil.copy2(render_src, os.path.join(ASSETS_DIR, render_img_name))

        if pdf_path and os.path.exists(pdf_path):
            pdf_dest = f"{slug}-review.pdf"
            shutil.copy2(pdf_path, os.path.join(ASSETS_DIR, pdf_dest))

        # Generate audit page
        page = build_audit_page(entry, msg, review_text, qa_report, render_img_name)
        with open(os.path.join(AUDITS_DIR, f"{slug}.html"), "w") as f:
            f.write(page)

        # Collect data for index
        dt = parse_timestamp(msg)
        score = extract_score(review_text)
        badge = qa_badge(qa_report)
        from_addr = msg.get("from_") or msg.get("from") or ""
        from_name = parse_display_name(from_addr)

        entries_data.append({
            "dt": dt,
            "subject": subject,
            "score": score,
            "qa_badge": badge,
            "slug": slug,
            "from_name": from_name,
        })

    # Sort by date descending for index
    entries_data.sort(key=lambda e: e["dt"] or datetime.min.replace(tzinfo=timezone.utc), reverse=True)

    # Generate index
    index_html = build_index(entries_data)
    with open(os.path.join(SCRIPT_DIR, "index.html"), "w") as f:
        f.write(index_html)

    print(f"Generated {len(entries_data)} audit pages + index.html")


if __name__ == "__main__":
    main()
