import json, os, re, sys
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, Image, PageBreak, Preformatted
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT


def clean_inline(text):
    text = text.replace('**', '')
    text = text.replace('__', '')
    text = text.replace('### ', '')
    text = text.replace('## ', '')
    text = text.replace('# ', '')
    text = re.sub(r'`([^`]*)`', r'\1', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def parse_review(text):
    sections = {
        'executive_summary': [],
        'evidence': [],
        'what_working': [],
        'what_weak': [],
        'recommendations': [],
        'bottom_line': [],
        'score': None,
        'leftovers': [],
    }
    current = 'executive_summary'
    pending_label = None

    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            continue

        m = re.search(r'(business impact score|business impact|impact)\s*:?[ ]*(\d{1,2})\s*/\s*10', line, re.I)
        if m and not sections['score']:
            sections['score'] = f"{m.group(2)}/10"
            continue

        low = clean_inline(line).lower().strip(':- ')
        if low == 'executive summary':
            current = 'executive_summary'; pending_label = None; continue
        if low == 'evidence' or low == 'evidence & analysis':
            current = 'evidence'; pending_label = None; continue
        if low == "what’s working" or low == "what's working" or low == 'what works':
            current = 'what_working'; pending_label = None; continue
        if low == "what’s weak" or low == "what's weak" or low == 'what is weak':
            current = 'what_weak'; pending_label = None; continue
        if low.startswith('recommendation'):
            current = 'recommendations'; pending_label = None; continue
        if low == 'bottom line':
            current = 'bottom_line'; pending_label = None; continue

        bulletish = bool(re.match(r'^[-•*]\s+', line))
        numbered = bool(re.match(r'^\d+[\.)]\s+', line))
        line = re.sub(r'^[-•*]\s*', '', line)
        line = re.sub(r'^\d+[\.)]\s*', '', line)
        line = clean_inline(line)
        if not line:
            continue

        # Turn label-like bullets into grouped bullets, e.g. "The trigger is meaningful:" then next line.
        if line.endswith(':') and current in ('what_working', 'what_weak', 'recommendations', 'evidence'):
            pending_label = line[:-1]
            continue

        if pending_label:
            line = f"{pending_label}: {line}"
            pending_label = None

        if current in sections:
            sections[current].append(line)
        else:
            sections['leftovers'].append(line)

    if not sections['score']:
        sections['score'] = 'n/a'

    # Backfill if the model used Evidence instead of split working/weak buckets.
    if not sections['what_working'] and not sections['what_weak'] and sections['evidence']:
        sections['what_working'] = sections['evidence'][:4]
        sections['what_weak'] = sections['evidence'][4:8]

    return sections


review_path, artifacts_dir, output_pdf = sys.argv[1:4]
qa_report_path = None
if '--qa-report' in sys.argv:
    idx = sys.argv.index('--qa-report')
    if idx + 1 < len(sys.argv):
        qa_report_path = sys.argv[idx + 1]
qa_data = None
if qa_report_path and os.path.exists(qa_report_path):
    try:
        qa_data = json.load(open(qa_report_path, 'r', encoding='utf-8'))
    except (json.JSONDecodeError, OSError):
        pass
review_text = open(review_path, 'r', encoding='utf-8').read().strip()
meta = json.load(open(os.path.join(artifacts_dir, 'message.json'), 'r', encoding='utf-8'))
sections = parse_review(review_text)
subject = meta.get('subject') or 'Skechers Email Review'
webview_url = ''
wv = os.path.join(artifacts_dir, 'webview-url.txt')
if os.path.exists(wv):
    webview_url = open(wv, 'r', encoding='utf-8').read().strip()
image_path = os.path.join(artifacts_dir, 'email-webview-render.png')
if not os.path.exists(image_path):
    image_path = os.path.join(artifacts_dir, 'email-render.png')
html_path = os.path.join(artifacts_dir, 'message.html')
json_path = os.path.join(artifacts_dir, 'message.json')

doc = SimpleDocTemplate(output_pdf, pagesize=letter, rightMargin=42, leftMargin=42, topMargin=40, bottomMargin=32)
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='TitleClean', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=18, leading=22, textColor=colors.HexColor('#111827'), alignment=TA_LEFT, spaceAfter=6))
styles.add(ParagraphStyle(name='Subtle', parent=styles['BodyText'], fontName='Helvetica', fontSize=8.5, leading=11, textColor=colors.HexColor('#6B7280'), spaceAfter=8))
styles.add(ParagraphStyle(name='Section', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=10.5, leading=13, textColor=colors.HexColor('#111827'), spaceBefore=5, spaceAfter=4))
styles.add(ParagraphStyle(name='BodyClean', parent=styles['BodyText'], fontName='Helvetica', fontSize=9.2, leading=12, textColor=colors.HexColor('#1F2937'), spaceAfter=5))
styles.add(ParagraphStyle(name='Score', parent=styles['BodyText'], fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=colors.HexColor('#0F172A'), backColor=colors.HexColor('#F3F4F6'), borderPadding=6, spaceAfter=8))
styles.add(ParagraphStyle(name='Ref', parent=styles['Code'], fontName='Helvetica', fontSize=7.5, leading=9.5, textColor=colors.HexColor('#374151'), spaceAfter=3))
styles.add(ParagraphStyle(name='AuditMono', parent=styles['Code'], fontName='Courier', fontSize=7.2, leading=8.8, textColor=colors.HexColor('#1F2937'), spaceAfter=4))

story = []
story.append(Paragraph(f'Skechers Email Review: “{clean_inline(subject)}”', styles['TitleClean']))
story.append(Paragraph('Walker · US market · Executive summary first, evidence after', styles['Subtle']))
story.append(Paragraph('Executive Summary', styles['Section']))
for p in sections['executive_summary']:
    story.append(Paragraph(clean_inline(p), styles['BodyClean']))
story.append(Paragraph(f'Business Impact Score: {sections["score"]}', styles['Score']))
for title, key in [('What’s Working', 'what_working'), ('What’s Weak', 'what_weak'), ('Recommendations', 'recommendations')]:
    vals = [clean_inline(v) for v in sections[key] if clean_inline(v)]
    if vals:
        story.append(Paragraph(title, styles['Section']))
        story.append(ListFlowable([ListItem(Paragraph(v, styles['BodyClean'])) for v in vals], bulletType='bullet', leftIndent=14))
        story.append(Spacer(1,4))
if sections['evidence']:
    story.append(Paragraph('Evidence', styles['Section']))
    for p in [clean_inline(v) for v in sections['evidence'] if clean_inline(v)]:
        story.append(Paragraph(p, styles['BodyClean']))
if qa_data:
    story.append(Paragraph('Automated QA', styles['Section']))
    s = qa_data.get('summary', {})
    story.append(Paragraph(
        f"Pass rate: {s.get('overall_pass_rate', '?')} &bull; "
        f"Issues: {s.get('total_issues', 0)} &bull; "
        f"Warnings: {s.get('total_warnings', 0)}",
        styles['BodyClean']
    ))
    cat_labels = {'link_analysis': 'Link Analysis', 'rendering': 'Rendering & Visual',
                  'personalization': 'Personalization & Merge', 'compliance': 'Compliance & Deliverability'}
    for cat_key, cat_label in cat_labels.items():
        cat = qa_data.get('categories', {}).get(cat_key, {})
        issues = [c for c in cat.get('checks', []) if c.get('status') != 'pass']
        if not issues:
            continue
        items = []
        for c in issues:
            icon = '\u2718' if c['status'] == 'fail' else '\u26a0'
            detail = c.get('detail', '')
            url_note = f" | {c['url']}" if c.get('url') else ''
            label = clean_inline(f"{icon} {c['label']}: {detail}{url_note}")
            items.append(ListItem(Paragraph(label, styles['BodyClean'])))
        if items:
            story.append(Paragraph(cat_label, styles['BodyClean']))
            story.append(ListFlowable(items, bulletType='bullet', leftIndent=14))
    story.append(Spacer(1, 4))

if os.path.exists(image_path):
    story.append(Paragraph('Visual Reference', styles['Section']))
    story.append(Image(image_path, width=180, height=495))
    story.append(Paragraph('Visual source: hosted web-view render when available.', styles['Ref']))
    story.append(Spacer(1,4))
story.append(Paragraph('Reference Artifacts', styles['Section']))
if webview_url:
    story.append(Paragraph(f'Web view: <link href="{webview_url}">{webview_url}</link>', styles['Ref']))
story.append(Paragraph(f'Saved HTML: {html_path}', styles['Ref']))
story.append(Paragraph(f'Saved message JSON: {json_path}', styles['Ref']))
story.append(Spacer(1,4))
story.append(Paragraph('Bottom Line', styles['Section']))
for p in (sections['bottom_line'] or sections['executive_summary'][:1]):
    story.append(Paragraph(clean_inline(p), styles['BodyClean']))
if sections['leftovers']:
    story.append(Paragraph('Additional Audit Notes', styles['Section']))
    for p in [clean_inline(v) for v in sections['leftovers'] if clean_inline(v)]:
        story.append(Paragraph(p, styles['BodyClean']))

doc.build(story)
print(output_pdf)
