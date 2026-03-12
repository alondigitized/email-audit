import json, os, re, sys
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, Image, PageBreak, Preformatted
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT


def parse_review(text):
    sections = {
        'executive_summary': [],
        'what_working': [],
        'what_weak': [],
        'recommendations': [],
        'bottom_line': [],
        'score': None,
    }
    current = 'executive_summary'
    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            continue
        m = re.search(r'(business impact score|business impact|impact)\s*:?\s*(\d{1,2})\s*/\s*10', line, re.I)
        if m and not sections['score']:
            sections['score'] = f"{m.group(2)}/10"
            continue
        low = line.lower().strip('*# -')
        if 'what’s working' in low or "what's working" in low or low == 'what works':
            current = 'what_working'; continue
        if 'what’s weak' in low or "what's weak" in low or low.startswith('what’s weak') or low.startswith("what's weak"):
            current = 'what_weak'; continue
        if 'recommendation' in low:
            current = 'recommendations'; continue
        if 'bottom line' in low:
            current = 'bottom_line'; continue
        if 'executive summary' in low:
            current = 'executive_summary'; continue
        line = re.sub(r'^[-•]\s*', '', line)
        sections[current].append(line)
    if not sections['score']:
        sections['score'] = 'n/a'
    return sections

review_path, artifacts_dir, output_pdf = sys.argv[1:4]
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
story.append(Paragraph(f'Skechers Email Review: “{subject}”', styles['TitleClean']))
story.append(Paragraph('Walker · US market · Executive summary first, evidence after', styles['Subtle']))
story.append(Paragraph('Executive Summary', styles['Section']))
for p in sections['executive_summary'][:5]:
    story.append(Paragraph(p, styles['BodyClean']))
story.append(Paragraph(f'Business Impact Score: {sections["score"]}', styles['Score']))
for title, key in [('What’s Working', 'what_working'), ('What’s Weak', 'what_weak'), ('Recommendations', 'recommendations')]:
    vals = sections[key]
    if vals:
        story.append(Paragraph(title, styles['Section']))
        story.append(ListFlowable([ListItem(Paragraph(v, styles['BodyClean'])) for v in vals], bulletType='bullet', leftIndent=14))
        story.append(Spacer(1,4))
if os.path.exists(image_path):
    story.append(Paragraph('Visual Reference', styles['Section']))
    story.append(Image(image_path, width=255, height=700))
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
    story.append(Paragraph(p, styles['BodyClean']))

story.append(PageBreak())
story.append(Paragraph('Full Audit', styles['Section']))
story.append(Paragraph('Verbatim review text preserved below so no audit content is lost in PDF formatting.', styles['Subtle']))
story.append(Preformatted(review_text, styles['AuditMono']))

doc.build(story)
print(output_pdf)
