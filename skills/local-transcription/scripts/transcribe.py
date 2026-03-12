#!/usr/bin/env python3
import argparse
import json
from pathlib import Path

import whisper


def main():
    parser = argparse.ArgumentParser(description='Local transcription using Whisper')
    parser.add_argument('input', help='Audio/video file path')
    parser.add_argument('--model', default='base', choices=['tiny', 'base', 'small', 'medium', 'large'], help='Whisper model')
    parser.add_argument('--language', default=None, help='Optional language hint, e.g. en')
    parser.add_argument('--format', default='txt', choices=['txt', 'json', 'srt'], help='Output format')
    parser.add_argument('--output', default=None, help='Optional explicit output path')
    args = parser.parse_args()

    in_path = Path(args.input).expanduser().resolve()
    if not in_path.exists():
        raise SystemExit(f'Input not found: {in_path}')

    model = whisper.load_model(args.model)
    result = model.transcribe(str(in_path), language=args.language, fp16=False)

    if args.output:
        out_path = Path(args.output).expanduser().resolve()
    else:
        suffix = { 'txt': '.txt', 'json': '.json', 'srt': '.srt' }[args.format]
        out_path = in_path.with_suffix(in_path.suffix + suffix)

    out_path.parent.mkdir(parents=True, exist_ok=True)

    if args.format == 'txt':
        text = (result.get('text') or '').strip()
        out_path.write_text(text + '\n', encoding='utf-8')
        print(text)
    elif args.format == 'json':
        payload = {
            'text': (result.get('text') or '').strip(),
            'language': result.get('language'),
            'segments': result.get('segments', []),
            'source': str(in_path),
            'model': args.model,
        }
        out_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding='utf-8')
        print(json.dumps(payload, ensure_ascii=False, indent=2))
    else:
        lines = []
        for i, seg in enumerate(result.get('segments', []), start=1):
            def fmt(ts):
                ms = int(round(ts * 1000))
                h = ms // 3600000
                ms %= 3600000
                m = ms // 60000
                ms %= 60000
                s = ms // 1000
                ms %= 1000
                return f'{h:02d}:{m:02d}:{s:02d},{ms:03d}'
            lines.append(str(i))
            lines.append(f"{fmt(seg['start'])} --> {fmt(seg['end'])}")
            lines.append((seg.get('text') or '').strip())
            lines.append('')
        srt = '\n'.join(lines)
        out_path.write_text(srt, encoding='utf-8')
        print(srt)

    print(f"\nSaved: {out_path}")


if __name__ == '__main__':
    main()
