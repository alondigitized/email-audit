from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.utils import ImageReader

out = '/Users/alontsang/.openclaw-walker/workspace/reports/skechers-welcome-email-review.pdf'
artifacts_dir = '/Users/alontsang/.openclaw-walker/workspace/reports/email-artifacts/skechers-welcome-2026-03-11'
image_path = f'{artifacts_dir}/email-render.png'
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
story.append(Paragraph('Skechers Email Review: “Welcome to Skechers!”', styles['TitleClean']))
story.append(Paragraph('Walker · US market · Executive summary first, evidence after', styles['Subtle']))
story.append(Paragraph('Executive Summary', styles['Section']))
story.append(Paragraph('This is a solid, commercially functional welcome / conversion email, but it is overstuffed and not disciplined enough. It accomplishes the basics — welcome the user, present an offer, and surface multiple shopping paths — yet it tries to do too many jobs in one send, which weakens focus and onboarding clarity.', styles['BodyClean']))
story.append(Paragraph('Business Impact Score: 7/10', styles['Score']))
story.append(Paragraph('What’s Working', styles['Section']))
working = [
    'The intent is clear: welcome the user and push a next action.',
    'The promo hook is tangible and useful: <b>USE CODE: WEL20-C39C3FPRRN</b>.',
    'It provides multiple meaningful entry points into commerce: categories, registration, app, SMS, store locator, and Skechers Plus.',
    'It is clearly aligned to the US experience.',
    'It creates real email-to-site continuity through direct links into category and account paths.'
]
story.append(ListFlowable([ListItem(Paragraph(x, styles['BodyClean'])) for x in working], bulletType='bullet', leftIndent=14))
story.append(Spacer(1, 4))
story.append(Paragraph('What’s Weak', styles['Section']))
weak = [
    'The email is too crowded: welcome offer, category shopping, membership, SMS, app install, curbside pickup, BNPL, store locator, social follow, and more.',
    'There are too many competing calls to action, which creates choice overload.',
    'The information hierarchy is weak: it is unclear whether the primary objective is shopping now, joining Skechers Plus, using the code, downloading the app, or opting into SMS.',
    'The lifecycle onboarding story is broad rather than sharp, which dilutes new-customer momentum.'
]
story.append(ListFlowable([ListItem(Paragraph(x, styles['BodyClean'])) for x in weak], bulletType='bullet', leftIndent=14))
story.append(Spacer(1, 4))
story.append(Paragraph('Recommendations', styles['Section']))
recs = [
    'Choose one primary conversion goal for the email.',
    'Make the welcome offer the unquestioned hero if immediate commerce is the goal.',
    'Reduce primary and secondary CTAs so the user is not asked to do everything at once.',
    'Move lower-priority actions such as app download, SMS signup, store locator, and social follow into a secondary zone.',
    'Make Skechers Plus feel integrated into the welcome value proposition rather than appearing as one more block.'
]
story.append(ListFlowable([ListItem(Paragraph(x, styles['BodyClean'])) for x in recs], bulletType='bullet', leftIndent=14))
story.append(Spacer(1, 4))
story.append(Paragraph('Visual Reference', styles['Section']))
img = Image(image_path, width=240, height=480)
story.append(img)
story.append(Spacer(1, 4))
story.append(Paragraph('Reference Artifacts', styles['Section']))
story.append(Paragraph(f'Web view: <link href="{webview_url}">{webview_url}</link>', styles['Ref']))
story.append(Paragraph(f'Saved HTML: {html_path}', styles['Ref']))
story.append(Paragraph(f'Saved message JSON: {json_path}', styles['Ref']))
story.append(Spacer(1, 4))
story.append(Paragraph('Bottom Line', styles['Section']))
story.append(Paragraph('This email is commercially competent, but not sharp enough. It likely performs reasonably well, yet a cleaner and more prioritized version would likely improve conversion clarity, onboarding momentum, and overall customer understanding of what to do next.', styles['BodyClean']))

doc.build(story)
print(out)
