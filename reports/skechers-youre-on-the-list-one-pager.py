from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT

out = '/Users/alontsang/.openclaw-walker/workspace/reports/skechers-youre-on-the-list-review.pdf'
artifacts_dir = '/Users/alontsang/.openclaw-walker/workspace/reports/email-artifacts/skechers-youre-on-the-list-2026-03-11'
image_path = f'{artifacts_dir}/email-webview-render.png'
html_path = f'{artifacts_dir}/message.html'
json_path = f'{artifacts_dir}/message.json'
webview_url = open(f'{artifacts_dir}/webview-url.txt', 'r', encoding='utf-8').read().strip()

doc = SimpleDocTemplate(out, pagesize=letter, rightMargin=42, leftMargin=42, topMargin=40, bottomMargin=32)
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='TitleClean', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=19, leading=23, textColor=colors.HexColor('#111827'), alignment=TA_LEFT, spaceAfter=6))
styles.add(ParagraphStyle(name='Subtle', parent=styles['BodyText'], fontName='Helvetica', fontSize=8.5, leading=11, textColor=colors.HexColor('#6B7280'), spaceAfter=8))
styles.add(ParagraphStyle(name='Section', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=10.5, leading=13, textColor=colors.HexColor('#111827'), spaceBefore=5, spaceAfter=4))
styles.add(ParagraphStyle(name='BodyClean', parent=styles['BodyText'], fontName='Helvetica', fontSize=9.2, leading=12, textColor=colors.HexColor('#1F2937'), spaceAfter=5))
styles.add(ParagraphStyle(name='Score', parent=styles['BodyText'], fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=colors.HexColor('#0F172A'), backColor=colors.HexColor('#F3F4F6'), borderPadding=6, spaceAfter=8))
styles.add(ParagraphStyle(name='Ref', parent=styles['Code'], fontName='Helvetica', fontSize=7.5, leading=9.5, textColor=colors.HexColor('#374151'), spaceAfter=3))

story = []
story.append(Paragraph('Skechers Email Review: “You’re on the list!”', styles['TitleClean']))
story.append(Paragraph('Walker · US market · Executive summary first, evidence after', styles['Subtle']))
story.append(Paragraph('Executive Summary', styles['Section']))
story.append(Paragraph('This is clearly a Skechers marketing/experience email — specifically an in-stock / back-in-stock style notification. The intent is strong because it is tied to prior customer interest, but the execution is thin and overly dependent on the product page doing all the work. It is directionally good, but underpowered as a recovery or return-to-site moment.', styles['BodyClean']))
story.append(Paragraph('Business Impact Score: 5/10', styles['Score']))
story.append(Paragraph('What’s Working', styles['Section']))
working = [
    'The email is rooted in real customer intent, which makes it inherently relevant.',
    'The one-product focus is cleaner than a broad promotional blast.',
    'The message likely creates useful urgency if the shopper still wants that item.',
    'Email-to-site continuity can be strong if the click path lands directly on the desired product and size context.'
]
story.append(ListFlowable([ListItem(Paragraph(x, styles['BodyClean'])) for x in working], bulletType='bullet', leftIndent=14))
story.append(Spacer(1, 4))
story.append(Paragraph('What’s Weak', styles['Section']))
weak = [
    'There is very little merchandising support beyond the core item.',
    'If the shopper no longer wants that exact product, the email offers weak recovery paths.',
    'Product discoverability is narrow to the point of fragility.',
    'The business outcome depends heavily on a frictionless product-page experience after click.'
]
story.append(ListFlowable([ListItem(Paragraph(x, styles['BodyClean'])) for x in weak], bulletType='bullet', leftIndent=14))
story.append(Spacer(1, 4))
story.append(Paragraph('Recommendations', styles['Section']))
recs = [
    'Keep the high-intent product focus, but add stronger fallback navigation if the exact item no longer converts.',
    'Include adjacent recovery paths such as similar styles, alternate colors, or category links.',
    'Make sure the landing experience preserves intent immediately — product, variant, and availability should feel continuous from the email.',
    'Treat this type of email as a precision conversion tool, not just a generic notification.'
]
story.append(ListFlowable([ListItem(Paragraph(x, styles['BodyClean'])) for x in recs], bulletType='bullet', leftIndent=14))
story.append(Spacer(1, 4))
story.append(Paragraph('Visual Reference', styles['Section']))
img = Image(image_path, width=255, height=700)
story.append(img)
story.append(Paragraph('Visual source: hosted web-view render.', styles['Ref']))
story.append(Spacer(1, 4))
story.append(Paragraph('Reference Artifacts', styles['Section']))
story.append(Paragraph(f'Web view: <link href="{webview_url}">{webview_url}</link>', styles['Ref']))
story.append(Paragraph(f'Saved HTML: {html_path}', styles['Ref']))
story.append(Paragraph(f'Saved message JSON: {json_path}', styles['Ref']))
story.append(Spacer(1, 4))
story.append(Paragraph('Bottom Line', styles['Section']))
story.append(Paragraph('This is a sensible triggered email, but not yet a strong one. It benefits from relevance and intent, but it needs better fallback merchandising and stronger post-click continuity to maximize business value.', styles['BodyClean']))

doc.build(story)
print(out)
