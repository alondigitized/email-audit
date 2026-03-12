---
name: local-transcription
description: Transcribe local audio or video files on this machine using Whisper, without cloud upload. Use when asked to transcribe voice notes, meetings, interviews, screen recordings, or short videos stored locally; especially for Telegram/Signal/iMessage voice messages and other media files in the workspace or inbound media folders.
---

# Local Transcription

Use the bundled script for deterministic local transcription.

## Default workflow

1. Run `scripts/transcribe.py <media-path>`.
2. Prefer `--format txt` for quick transcripts.
3. Use `--format json` when timestamps/language metadata are useful.
4. For long audio, keep the default `base` model unless accuracy is clearly too weak.
5. For short voice notes on this Mac, prefer `--model base` or `--model small`.

## Commands

Quick transcript:

```bash
python3 skills/local-transcription/scripts/transcribe.py /path/to/audio.ogg
```

JSON transcript with metadata:

```bash
python3 skills/local-transcription/scripts/transcribe.py /path/to/audio.ogg --format json
```

Higher accuracy model:

```bash
python3 skills/local-transcription/scripts/transcribe.py /path/to/audio.ogg --model small
```

## Notes

- Runs fully local through Python Whisper + ffmpeg.
- Accepts audio or video inputs supported by ffmpeg.
- Writes sidecar output next to the source file by default.
- Also prints the transcript to stdout for quick copy/paste.
- If transcription is slow, try `--model base`; if quality is weak, try `--model small`.
