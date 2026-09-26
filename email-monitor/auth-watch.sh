#!/bin/zsh
# Claude-auth watchdog for the email-monitor daemon.
#
# The daemon survives `claude` CLI auth expiry LOOKING healthy: it polls,
# logs, and completes zero emails. This has now caused two 9-day silent
# outages (Jul 25–Aug 3 and Sep 17–26, 2026) — thousands of "Not logged
# in" / "OAuth session expired" lines nobody saw. OAuth relogin is
# interactive by design, so the fix is DETECTION: this script runs every
# 30 minutes via launchd and makes the failure loud.
#
# Signal 1: auth-error lines in the recent log tail.
# Signal 2 (backstop): unprocessed queue > 25 AND no completion logged in
#           the last 3 hours — catches failure modes with new wording.
# Confirmation: only alerts after a live `claude -p` probe also fails
#           (signal 1) so a transient blip can't page anyone.
# Alert: macOS notification + iMessage to self. Rate-limited to one alert
#           per 6 hours via a stamp file.

set -u
export PATH="/opt/homebrew/bin:/usr/local/bin:$HOME/.local/bin:$PATH"

DIR="$HOME/.openclaw-walker/workspace/email-monitor"
LOG="$DIR/logs/monitor.log"
WLOG="$DIR/logs/auth-watch.log"
STAMP="$DIR/logs/.auth-alert-stamp"
IMSG_TO="alondigitized@gmail.com"

log() { echo "[$(date -u +%FT%TZ)] $*" >> "$WLOG"; }

alert() {
  local msg="$1"
  # rate limit: one alert per 6h
  if [ -f "$STAMP" ] && [ $(( $(date +%s) - $(stat -f %m "$STAMP") )) -lt 21600 ]; then
    log "ALERT SUPPRESSED (rate limit): $msg"
    return
  fi
  touch "$STAMP"
  log "ALERT: $msg"
  osascript -e "display notification \"$msg\" with title \"etell email-monitor\" sound name \"Basso\"" 2>/dev/null
  osascript -e "tell application \"Messages\" to send \"⚠️ etell: $msg\" to buddy \"$IMSG_TO\" of (service 1 whose service type is iMessage)" 2>/dev/null \
    || log "iMessage send failed (Messages not signed in?)"
}

[ -f "$LOG" ] || { log "monitor.log missing"; exit 0; }

TAIL=$(tail -n 400 "$LOG")

# ── Signal 1: explicit auth failures in the recent tail ──────────────────
if echo "$TAIL" | grep -qE "Not logged in|OAuth session expired|Please run /login"; then
  # confirm with a live probe before alerting — transient errors happen
  if ! claude -p "reply with exactly: OK" --model haiku >/dev/null 2>&1; then
    alert "Claude CLI auth is DOWN — email reviews are failing. Run: claude /login on the Mac mini. Queue is accumulating."
    exit 0
  else
    log "auth errors in log but live probe OK — recovering, no alert"
  fi
fi

# ── Signal 2: pipeline silent-stall backstop ─────────────────────────────
# No completion in 3h while the queue is deep — catches unknown wordings.
LAST_DONE=$(grep "message completed" "$LOG" | tail -1 | sed -E 's/^\[([^]]+)\].*/\1/')
if [ -n "$LAST_DONE" ]; then
  LAST_EPOCH=$(date -j -u -f "%Y-%m-%dT%H:%M:%S" "${LAST_DONE%%.*}" +%s 2>/dev/null || echo 0)
  AGE=$(( $(date +%s) - LAST_EPOCH ))
  if [ "$AGE" -gt 10800 ]; then
    QUEUE=$(cd "$DIR" && set -a && . ./.env 2>/dev/null && set +a && node -e "
      const { neon } = require('/Users/alontsang/.openclaw-walker/workspace/audit-pipeline/node_modules/@neondatabase/serverless');
      neon(process.env.DATABASE_URL_UNPOOLED||process.env.DATABASE_URL)\`SELECT count(*)::int c FROM email_message WHERE processed_at IS NULL\`.then(r=>console.log(r[0].c)).catch(()=>console.log(-1));" 2>/dev/null)
    if [ "${QUEUE:-0}" -gt 25 ]; then
      alert "email pipeline stalled: no completions in $((AGE/3600))h, $QUEUE emails queued. Check daemon + claude auth."
      exit 0
    fi
    log "no completion in $((AGE/3600))h but queue=${QUEUE:-?} — below threshold"
  fi
fi

log "healthy"
