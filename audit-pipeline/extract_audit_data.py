#!/usr/bin/env python3
"""Extract structured audit-data.json from raw artifacts.

Reads the published-audits.json manifest, walks each entry's artifactDir,
and writes audit-data.json into that directory by parsing message.json,
review.txt, and qa-report.json.

Consumed by email-monitor and site-monitor publish flows. Output is then
synced into the Next.js site at site/content/audits/{slug}/audit.json.
"""

import json
import os
import re
import sys
from datetime import datetime

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
MANIFEST = os.path.join(SCRIPT_DIR, "published-audits.json")


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
    """Parse review.txt into structured sections for downstream consumers."""
    sections = {
        "executive_summary": [],
        "business_impact_score": [],
        "whats_working": [],
        "whats_weak": [],
        "recommendations": [],
        "bottom_line": [],
        "subject_line": [],
        "evidence": [],
    }
    current = "executive_summary"

    for raw in review_text.splitlines():
        line = raw.strip()
        if not line or line == "---":
            continue
        if line.startswith("**WALKER AUDIT") or line.startswith("*Received:"):
            continue

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
        if cleaned in ("subject line analysis", "subject line", "subject"):
            current = "subject_line"; continue
        if cleaned in ("evidence", "evidence & analysis", "evidence and analysis"):
            current = "evidence"; continue

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
        "type": "email",
        "persona": entry.get("persona"),
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
    """For each email manifest entry, produce audit-data.json from raw artifacts.

    Site-journey entries (no message.json) are skipped — site-monitor builds
    its own audit-data.json directly in JS.
    """
    count = 0
    for entry in manifest:
        slug = entry.get("slug", "")
        artifact_dir = entry.get("artifactDir", "")
        if not artifact_dir or not os.path.isdir(artifact_dir):
            continue

        msg_path = os.path.join(artifact_dir, "message.json")
        if not os.path.exists(msg_path):
            continue

        audit_data_path = os.path.join(artifact_dir, "audit-data.json")
        if not is_stale(audit_data_path, artifact_dir):
            continue

        msg = load_json(msg_path) or {}
        review_text = read_file(os.path.join(artifact_dir, "review.txt"))
        qa_report = load_json(os.path.join(artifact_dir, "qa-report.json"))

        audit_data = build_audit_data(entry, msg, review_text, qa_report, slug)

        with open(audit_data_path, "w") as f:
            json.dump(audit_data, f, indent=2, ensure_ascii=False)
        count += 1
    return count


def main():
    manifest = load_json(MANIFEST)
    if not manifest:
        print("No published-audits.json found or empty.", file=sys.stderr)
        sys.exit(1)
    written = extract_all(manifest)
    print(f"Extracted audit-data.json for {written} entries (out of {len(manifest)} total)")


if __name__ == "__main__":
    main()
