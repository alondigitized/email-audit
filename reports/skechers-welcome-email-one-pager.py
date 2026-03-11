from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT

out = '/Users/alontsang/.openclaw-walker/workspace/reports/skechers-welcome-email-review.pdf'

doc = SimpleDocTemplate(out, pagesize=letter, rightMargin=50, leftMargin=50, topMargin=50, bottomMargin=42)
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='TitleClean', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=20, leading=24, textColor=colors.HexColor('#111827'), alignment=TA_LEFT, spaceAfter=8))
styles.add(ParagraphStyle(name='Subtle', parent=styles['BodyText'], fontName='Helvetica', fontSize=9, leading=12, textColor=colors.HexColor('#6B7280'), spaceAfter=10))
styles.add(ParagraphStyle(name='Section', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=11, leading=14, textColor=colors.HexColor('#111827'), spaceBefore=8, spaceAfter=6))
styles.add(ParagraphStyle(name='BodyClean', parent=styles['BodyText'], fontName='Helvetica', fontSize=10, leading=14, textColor=colors.HexColor('#1F2937'), spaceAfter=8))
styles.add(ParagraphStyle(name='Score', parent=styles['BodyText'], fontName='Helvetica-Bold', fontSize=11, leading=14, textColor=colors.HexColor('#0F172A'), backColor=colors.HexColor('#F3F4F6'), borderPadding=6, spaceAfter=10))

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
story.append(ListFlowable([ListItem(Paragraph(x, styles['BodyClean'])) for x in working], bulletType='bullet', leftIndent=16))
story.append(Spacer(1, 6))
story.append(Paragraph('What’s Weak', styles['Section']))
weak = [
    'The email is too crowded: welcome offer, category shopping, membership, SMS, app install, curbside pickup, BNPL, store locator, social follow, and more.',
    'There are too many competing calls to action, which creates choice overload.',
    'The information hierarchy is weak: it is unclear whether the primary objective is shopping now, joining Skechers Plus, using the code, downloading the app, or opting into SMS.',
    'The lifecycle onboarding story is broad rather than sharp, which dilutes new-customer momentum.'
]
story.append(ListFlowable([ListItem(Paragraph(x, styles['BodyClean'])) for x in weak], bulletType='bullet', leftIndent=16))
story.append(Spacer(1, 6))
story.append(Paragraph('Recommendations', styles['Section']))
recs = [
    'Choose one primary conversion goal for the email.',
    'Make the welcome offer the unquestioned hero if immediate commerce is the goal.',
    'Reduce primary and secondary CTAs so the user is not asked to do everything at once.',
    'Move lower-priority actions such as app download, SMS signup, store locator, and social follow into a secondary zone.',
    'Make Skechers Plus feel integrated into the welcome value proposition rather than appearing as one more block.'
]
story.append(ListFlowable([ListItem(Paragraph(x, styles['BodyClean'])) for x in recs], bulletType='bullet', leftIndent=16))
story.append(Spacer(1, 8))
story.append(Paragraph('Bottom Line', styles['Section']))
story.append(Paragraph('This email is commercially competent, but not sharp enough. It likely performs reasonably well, yet a cleaner and more prioritized version would likely improve conversion clarity, onboarding momentum, and overall customer understanding of what to do next.', styles['BodyClean']))

doc.build(story)
print(out)
