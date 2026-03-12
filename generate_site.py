#!/usr/bin/env python3
from pathlib import Path
import json, html, re, shutil

ROOT = Path('/Users/alontsang/.openclaw-walker/workspace/email-audit')
ARTIFACTS = Path('/Users/alontsang/.openclaw-walker/workspace/reports/email-artifacts')
REPORTS = Path('/Users/alontsang/.openclaw-walker/workspace/reports')
AUDITS = ROOT / 'audits'
ASSETS = ROOT / 'assets'

ROOT.mkdir(parents=True, exist_ok=True)
AUDITS.mkdir(parents=True, exist_ok=True)
ASSETS.mkdir(parents=True, exist_ok=True)

CSS = '''
:root { --bg:#faf8f5; --card:#ffffff; --ink:#1f2937; --muted:#6b7280; --line:#e5e7eb; --accent:#111827; }
*{box-sizing:border-box} body{margin:0;font-family:Inter,Arial,sans-serif;background:var(--bg);color:var(--ink)}
main{max-width:980px;margin:0 auto;padding:32px 20px 60px}
.hero,.card{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:24px;box-shadow:0 10px 30px rgba(0,0,0,.04)}
.hero{margin-bottom:22px}.muted{color:var(--muted)} h1,h2,h3{margin:0 0 10px} table{width:100%;border-collapse:collapse} th,td{padding:12px 10px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top} th{font-size:12px;text-transform:uppercase;color:var(--muted);letter-spacing:.05em}
a{color:#0f172a;text-decoration:none} a:hover{text-decoration:underline}
.section{margin-top:18px} ul{margin:8px 0 0 18px;padding:0} li{margin:6px 0} .score{display:inline-block;padding:8px 12px;border-radius:999px;background:#f3f4f6;font-weight:700}
.layout{display:grid;grid-template-columns:1.25fr .9fr;gap:20px}.image{width:100%;border:1px solid var(--line);border-radius:16px} .refs a{word-break:break-all}
@media(max-width:800px){.layout{grid-template-columns:1fr}}
'''
(ROOT/'styles.css').write_text(CSS)

def clean(text):
    text = text or ''
    text = text.replace('**','').replace('__','')
    text = re.sub(r'^#+\s*','',text, flags=re.M)
    text = re.sub(r'`([^`]*)`', r'\1', text)
    return text.strip()

def parse_review(text):
    sec={'summary':[], 'working':[], 'weak':[], 'recs':[], 'bottom':[], 'score':'n/a'}
    cur='summary'
    pending=None
    for raw in text.splitlines():
        line=raw.strip()
        if not line: continue
        m=re.search(r'(business impact score|business impact|impact)\s*:?\s*(\d{1,2})\s*/\s*10', line, re.I)
        if m:
            sec['score']=f"{m.group(2)}/10"; continue
        low=clean(line).lower().strip(':- ')
        if low=='executive summary': cur='summary'; pending=None; continue
        if "what's working" in low or 'what’s working' in low: cur='working'; pending=None; continue
        if "what's weak" in low or 'what’s weak' in low: cur='weak'; pending=None; continue
        if low.startswith('recommendation'): cur='recs'; pending=None; continue
        if low=='bottom line': cur='bottom'; pending=None; continue
        line=re.sub(r'^[-•*]\s*','',line)
        line=re.sub(r'^\d+[\.)]\s*','',line)
        line=clean(line)
        if line.endswith(':') and cur in ('working','weak','recs'):
            pending=line[:-1]; continue
        if pending:
            line=f'{pending}: {line}'; pending=None
        sec[cur].append(line)
    return sec

rows=[]
for d in sorted(ARTIFACTS.iterdir(), reverse=True):
    if not d.is_dir(): continue
    mp=d/'message.json'; rv=d/'review.txt'
    if not (mp.exists() and rv.exists()):
        continue
    data=json.loads(mp.read_text())
    sender=(data.get('from_') or data.get('from') or '')
    if 'skechers' not in sender.lower() and 'skechers' not in (data.get('subject') or '').lower():
        continue
    subject=data.get('subject') or 'Untitled'
    slug=re.sub(r'[^a-z0-9]+','-', d.name.lower()).strip('-')
    created=(data.get('created_at') or '')
    date=created[:10] if created else d.name[:10]
    time=created[11:16] if len(created)>=16 else ''
    review=clean(rv.read_text())
    parsed=parse_review(review)
    webview=(d/'webview-url.txt').read_text().strip() if (d/'webview-url.txt').exists() else ''
    img=None
    for p in ['email-webview-render.png','email-render.png']:
        if (d/p).exists():
            target=ASSETS/f'{slug}-{p}'
            shutil.copy2(d/p, target)
            img=target.name
            break
    slug_tail = slug[len(date)+1:] if slug.startswith(date + '-') else slug
    pdf_candidates=sorted(REPORTS.glob(f'*{date}*{slug_tail[:24]}*review.pdf'))
    pdf_link=''
    if pdf_candidates:
        target=ASSETS/pdf_candidates[-1].name
        shutil.copy2(pdf_candidates[-1], target)
        pdf_link=target.name
    rows.append({'slug':slug,'subject':subject,'date':date,'time':time,'sender':sender,'score':parsed['score'],'parsed':parsed,'webview':webview,'img':img,'pdf':pdf_link,'dir':d.name})

for row in rows:
    p=row['parsed']
    def bullets(items):
        return '<ul>' + ''.join(f'<li>{html.escape(i)}</li>' for i in items) + '</ul>' if items else '<p class="muted">—</p>'
    image_html = f'<img class="image" src="../assets/{row["img"]}" alt="Email render">' if row['img'] else '<p class="muted">No image available.</p>'
    webview_html = f'<a href="{html.escape(row["webview"])}">{html.escape(row["webview"])}</a>' if row['webview'] else '—'
    pdf_html = f'<a href="../assets/{row["pdf"]}">Download PDF</a>' if row['pdf'] else '—'
    summary_html = ''.join(f'<p>{html.escape(x)}</p>' for x in p['summary'])
    bottom_html = ''.join(f'<p>{html.escape(x)}</p>' for x in (p['bottom'] or p['summary'][:1]))
    body=f'''<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{html.escape(row['subject'])}</title><link rel="stylesheet" href="../styles.css"></head><body><main><div class="hero"><div class="muted">Skechers Email Audit</div><h1>{html.escape(row['subject'])}</h1><div class="muted">{html.escape(row['date'])} {html.escape(row['time'])} · {html.escape(row['sender'])}</div></div><div class="layout"><div class="card"><div class="score">Business Impact Score: {html.escape(row['score'])}</div><div class="section"><h2>Executive Summary</h2>{summary_html}</div><div class="section"><h2>What’s Working</h2>{bullets(p['working'])}</div><div class="section"><h2>What’s Weak</h2>{bullets(p['weak'])}</div><div class="section"><h2>Recommendations</h2>{bullets(p['recs'])}</div><div class="section"><h2>Bottom Line</h2>{bottom_html}</div></div><div class="card"><div class="section"><h2>Visual Reference</h2>{image_html}</div><div class="section refs"><h2>References</h2><p><strong>Web view:</strong> {webview_html}</p><p><strong>PDF:</strong> {pdf_html}</p><p><strong>Artifacts:</strong> {html.escape(row['dir'])}</p><p><a href="../index.html">← Back to index</a></p></div></div></div></main></body></html>'''
    (AUDITS/f"{row['slug']}.html").write_text(body)

rows_html=''.join(f"<tr><td>{html.escape(r['date'])}</td><td>{html.escape(r['time'])}</td><td>{html.escape(r['subject'])}</td><td>{html.escape(r['score'])}</td><td><a href='audits/{r['slug']}.html'>View audit</a></td></tr>" for r in rows)
index=f'''<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Email Audit</title><link rel="stylesheet" href="styles.css"></head><body><main><div class="hero"><div class="muted">Skechers Digital</div><h1>Email Audit</h1><p class="muted">Homepage index of conducted email audits, with links to detailed audit pages.</p></div><div class="card"><table><thead><tr><th>Date</th><th>Time</th><th>Email Name</th><th>Score</th><th>Detail</th></tr></thead><tbody>{rows_html}</tbody></table></div></main></body></html>'''
(ROOT/'index.html').write_text(index)
print(f'Generated {len(rows)} audits at {ROOT}')
