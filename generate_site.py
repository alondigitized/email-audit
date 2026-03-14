#!/usr/bin/env python3
from pathlib import Path
import json, html, re, shutil

ROOT = Path('/Users/alontsang/.openclaw-walker/workspace/email-audit')
AUDITS = ROOT / 'audits'
ASSETS = ROOT / 'assets'
MANIFEST = ROOT / 'published-audits.json'

ROOT.mkdir(parents=True, exist_ok=True)
AUDITS.mkdir(parents=True, exist_ok=True)
ASSETS.mkdir(parents=True, exist_ok=True)

GATE_JS = '''<script>
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
</script>'''

GATE_HTML = '''<div id="gate" style="display:none;position:fixed;inset:0;z-index:9999;background:#faf8f5;align-items:center;justify-content:center;flex-direction:column;font-family:Inter,Arial,sans-serif">
<div style="background:#fff;border:1px solid #e5e7eb;border-radius:20px;padding:40px;max-width:360px;width:90%;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.04)">
<h2 style="margin:0 0 8px;color:#1f2937">Email Audit</h2>
<p style="color:#6b7280;margin:0 0 20px;font-size:14px">Enter the shared secret to continue.</p>
<input id="gate-in" type="password" placeholder="Shared secret" style="width:100%;padding:10px 14px;border:1px solid #e5e7eb;border-radius:10px;font-size:15px;margin-bottom:12px;box-sizing:border-box;outline:none">
<button id="gate-btn" style="width:100%;padding:10px;background:#111827;color:#fff;border:none;border-radius:10px;font-size:15px;cursor:pointer">Unlock</button>
<p id="gate-err" style="display:none;color:#dc2626;margin:10px 0 0;font-size:13px">Incorrect. Try again.</p>
</div></div>'''

GATE_CSS = '''
html:not(.ok) main{visibility:hidden}
'''

CSS = '''
:root { --bg:#faf8f5; --card:#ffffff; --ink:#1f2937; --muted:#6b7280; --line:#e5e7eb; --accent:#111827; }
*{box-sizing:border-box} body{margin:0;font-family:Inter,Arial,sans-serif;background:var(--bg);color:var(--ink)}
main{max-width:980px;margin:0 auto;padding:32px 20px 60px}
.hero,.card{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:24px;box-shadow:0 10px 30px rgba(0,0,0,.04)}
.hero{margin-bottom:22px}.muted{color:var(--muted)} h1,h2,h3{margin:0 0 10px} table{width:100%;border-collapse:collapse} th,td{padding:12px 10px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top} th{font-size:12px;text-transform:uppercase;color:var(--muted);letter-spacing:.05em}
a{color:#0f172a;text-decoration:none} a:hover{text-decoration:underline}
.section{margin-top:18px} ul{margin:8px 0 0 18px;padding:0} li{margin:6px 0} .score{display:inline-block;padding:8px 12px;border-radius:999px;background:#f3f4f6;font-weight:700}
.layout{display:grid;grid-template-columns:1.25fr .9fr;gap:20px}.image{width:100%;border:1px solid var(--line);border-radius:16px} .refs a{word-break:break-all}
.meta-table{margin-top:14px;border:none} .meta-table td{border:none;padding:4px 12px 4px 0;font-size:14px} .meta-label{color:var(--muted);font-weight:600;white-space:nowrap;width:80px}
@media(max-width:800px){.layout{grid-template-columns:1fr}}
'''
(ROOT/'styles.css').write_text(CSS + GATE_CSS)

def clean(text):
    text = text or ''
    text = text.replace('**','').replace('__','')
    text = re.sub(r'^#+\s*','',text, flags=re.M)
    text = re.sub(r'`([^`]*)`', r'\1', text)
    return text.strip()

def parse_review(text):
    sec = {'summary':[], 'working':[], 'weak':[], 'recs':[], 'bottom':[], 'evidence':[], 'score':'n/a'}
    cur = '_preamble'
    pending = None
    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            continue
        if re.match(r'^-{2,}$', line):
            continue
        m = re.search(r'(business impact score|business impact|impact)\s*:?\s*(\d{1,2}(?:\.\d+)?)\s*/\s*10', line, re.I)
        if m:
            sec['score'] = f"{m.group(2)}/10"
            continue
        low = clean(line).lower().strip(':- ')
        low = re.sub(r'^\d+[\.)]\s*', '', low).strip()
        if low == 'executive summary':
            cur = 'summary'; pending = None; continue
        if low == 'evidence' or low == 'evidence & analysis':
            cur = 'evidence'; pending = None; continue
        if "what's working" in low or "what\u2019s working" in low:
            cur = 'working'; pending = None; continue
        if "what's weak" in low or "what\u2019s weak" in low:
            cur = 'weak'; pending = None; continue
        if low.startswith('recommendation'):
            cur = 'recs'; pending = None; continue
        if low == 'bottom line':
            cur = 'bottom'; pending = None; continue
        if low == 'business impact score' or low == 'business impact':
            cur = '_score'; pending = None; continue
        if cur == '_score':
            sm = re.search(r'(\d{1,2}(?:\.\d+)?)\s*/\s*10', line)
            if sm:
                sec['score'] = f"{sm.group(1)}/10"
                cur = 'summary'
                continue
            cline = clean(line)
            if cline:
                sec['summary'].append(cline)
            continue
        line = re.sub(r'^[-\u2022*]\s*', '', line)
        line = re.sub(r'^\d+[\.)]\s*', '', line)
        line = clean(line)
        if not line:
            continue
        if line.endswith(':') and cur in ('working', 'weak', 'recs', 'evidence'):
            pending = line[:-1]
            continue
        if pending:
            line = f'{pending}: {line}'
            pending = None
        if cur not in ('_preamble', '_score'):
            sec[cur].append(line)
    return sec

for p in AUDITS.glob('*.html'):
    p.unlink()
for p in ASSETS.iterdir():
    if p.is_file():
        p.unlink()

manifest = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else []
rows = []
for item in manifest:
    d = Path(item['artifactDir'])
    mp = d / 'message.json'; rv = d / 'review.txt'
    if not (mp.exists() and rv.exists()):
        continue
    data = json.loads(mp.read_text())
    sender = (data.get('from_') or data.get('from') or '')
    subject = data.get('subject') or item.get('subject') or 'Untitled'
    slug = item['slug']
    created = (data.get('created_at') or data.get('timestamp') or '')
    date = created[:10] if created else slug[:10]
    time = created[11:16] if len(created) >= 16 else ''
    review = clean(rv.read_text())
    parsed = parse_review(review)
    webview = (d / 'webview-url.txt').read_text().strip() if (d / 'webview-url.txt').exists() else ''
    img = None
    for pth in ['email-webview-render.png', 'email-render.png']:
        if (d / pth).exists():
            target = ASSETS / f'{slug}-{pth}'
            shutil.copy2(d / pth, target)
            img = target.name
            break
    pdf_link = ''
    pdf_source = Path(item['pdfPath'])
    if pdf_source.exists():
        target = ASSETS / pdf_source.name
        shutil.copy2(pdf_source, target)
        pdf_link = target.name
    rows.append({'slug':slug, 'subject':subject, 'date':date, 'time':time, 'sender':sender, 'score':parsed['score'], 'parsed':parsed, 'webview':webview, 'img':img, 'pdf':pdf_link, 'dir':d.name})

rows.sort(key=lambda r: (r['date'], r['time']), reverse=True)

for row in rows:
    p = row['parsed']
    def bullets(items):
        return '<ul>' + ''.join(f'<li>{html.escape(i)}</li>' for i in items) + '</ul>' if items else '<p class="muted">\u2014</p>'
    image_html = f'<img class="image" src="../assets/{row["img"]}" alt="Email render">' if row['img'] else '<p class="muted">No image available.</p>'
    webview_html = f'<a href="{html.escape(row["webview"])}">{html.escape(row["webview"])}</a>' if row['webview'] else '\u2014'
    pdf_html = f'<a href="../assets/{row["pdf"]}">Download PDF</a>' if row['pdf'] else '\u2014'
    summary_html = ''.join(f'<p>{html.escape(x)}</p>' for x in p['summary'])
    bottom_html = ''.join(f'<p>{html.escape(x)}</p>' for x in (p['bottom'] or p['summary'][:1]))
    evidence_html = ''.join(f'<p>{html.escape(x)}</p>' for x in p['evidence']) if p['evidence'] else '<p class="muted">\u2014</p>'
    body = f'''<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{html.escape(row['subject'])}</title><link rel="stylesheet" href="../styles.css"></head><body>{GATE_HTML}<main><p><a href="../index.html">\u2190 Back to all audits</a></p><div class="hero"><div class="muted">Skechers Email Audit</div><h1>{html.escape(row['subject'])}</h1><table class="meta-table"><tr><td class="meta-label">From</td><td>{html.escape(row['sender'])}</td></tr><tr><td class="meta-label">Received</td><td>{html.escape(row['date'])} {html.escape(row['time'])} UTC</td></tr><tr><td class="meta-label">Score</td><td><span class="score">{html.escape(row['score'])}</span></td></tr></table></div><div class="layout"><div class="card"><div class="section"><h2>Executive Summary</h2>{summary_html}</div><div class="section"><h2>What\u2019s Working</h2>{bullets(p['working'])}</div><div class="section"><h2>What\u2019s Weak</h2>{bullets(p['weak'])}</div><div class="section"><h2>Recommendations</h2>{bullets(p['recs'])}</div><div class="section"><h2>Bottom Line</h2>{bottom_html}</div></div><div class="card"><div class="section"><h2>Visual Reference</h2>{image_html}</div><div class="section"><h2>Evidence</h2>{evidence_html}</div><div class="section refs"><h2>References</h2><p><strong>Web view:</strong> {webview_html}</p><p><strong>PDF:</strong> {pdf_html}</p></div></div></div></main>{GATE_JS}</body></html>'''
    (AUDITS / f"{row['slug']}.html").write_text(body)

rows_html = ''.join(f"<tr><td>{html.escape(r['date'])}</td><td>{html.escape(r['time'])}</td><td>{html.escape(r['subject'])}</td><td>{html.escape(r['score'])}</td><td><a href='audits/{r['slug']}.html'>View audit</a></td></tr>" for r in rows)
index = f'''<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Email Audit</title><link rel="stylesheet" href="styles.css"></head><body>{GATE_HTML}<main><div class="hero"><div class="muted">Skechers Digital</div><h1>Email Audit</h1><p class="muted">Homepage index of conducted email audits, with links to detailed audit pages.</p></div><div class="card"><table><thead><tr><th>Date</th><th>Time</th><th>Email Name</th><th>Score</th><th>Detail</th></tr></thead><tbody>{rows_html}</tbody></table></div></main>{GATE_JS}</body></html>'''
(ROOT / 'index.html').write_text(index)
print(f'Generated {len(rows)} audits at {ROOT}')
