#!/bin/bash
# Trigger a Vercel cron endpoint from the Mac mini. Replaces Vercel-managed
# crons (Hobby plan caps them at 1/day). Function execution still happens
# on Vercel — this just removes the schedule from Vercel's control.
#
# Usage:
#   cron-call.sh /api/cron/chat-reflect
#   cron-call.sh /api/cron/persona-synthesize
#
# Env (sourced from site-monitor/.env):
#   SITE_BASE_URL  e.g. https://etell.app
#   CRON_SECRET    same value as Vercel's CRON_SECRET env var

set -e

if [ -z "$1" ]; then
  echo "usage: cron-call.sh <path>" >&2
  exit 64
fi

PATH_ARG="$1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/../.env"

if [ -f "$ENV_FILE" ]; then
  set -a
  # shellcheck disable=SC1090
  . "$ENV_FILE"
  set +a
fi

if [ -z "$SITE_BASE_URL" ] || [ -z "$CRON_SECRET" ]; then
  echo "[cron-call] missing SITE_BASE_URL or CRON_SECRET in $ENV_FILE" >&2
  exit 65
fi

URL="${SITE_BASE_URL%/}${PATH_ARG}"
TS="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

echo "[cron-call] $TS GET $URL"

# 5-min timeout matches the route's maxDuration.
HTTP_CODE=$(curl -sS -o /tmp/cron-call-body.txt -w "%{http_code}" \
  --max-time 310 \
  -H "Authorization: Bearer $CRON_SECRET" \
  "$URL")

echo "[cron-call] $(date -u +%Y-%m-%dT%H:%M:%SZ) http=$HTTP_CODE"
head -c 4000 /tmp/cron-call-body.txt
echo

if [ "$HTTP_CODE" -lt 200 ] || [ "$HTTP_CODE" -ge 300 ]; then
  exit 1
fi
