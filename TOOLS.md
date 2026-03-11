# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## Walker Reporting SOP

### Skechers email reviews

- Default live review format in chat:
  - executive summary
  - business impact score (1-10)
  - evidence
  - recommendations
- Default polished artifact:
  - a clean one-page PDF in `workspace/reports/`
- Save supporting artifacts for polished reviews in `workspace/reports/email-artifacts/<slug>/`:
  - raw HTML
  - plain text
  - message JSON
  - URL list
  - web-view URL when available
  - rendered image snapshot when feasible
- Visual priority for PDFs:
  - inbox/client screenshot (best)
  - hosted web-view screenshot
  - raw HTML render (fallback only)
- One-page PDF structure:
  - title
  - executive summary
  - business impact score
  - what’s working
  - what’s weak
  - recommendations
  - visual reference
  - reference artifacts
  - bottom line
- Use the one-page PDF when the review is especially useful, presentation-ready, or likely to be shared.

Add whatever helps you do your job. This is your cheat sheet.
