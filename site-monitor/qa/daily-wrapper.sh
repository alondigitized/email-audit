#!/bin/zsh
# LaunchAgent wrapper for the daily QA contest run.
#
# Journeys REQUIRE real Chrome over CDP (stealth is blocked on protected paths
# and produces false findings). This wrapper ensures a dedicated Chrome is up
# on :9222 with a persistent profile — that profile is where a logged-in
# Skechers session lives, so member-area journeys keep working — then runs
# the orchestrator and leaves Chrome running for the next night.

set -e
PROFILE="$HOME/.openclaw-walker/workspace/site-monitor/.chrome-qa-profile"
LOG="$HOME/.openclaw-walker/workspace/site-monitor/logs/qa-daily.log"
mkdir -p "$PROFILE" "$(dirname "$LOG")"

# Bring Chrome up on the debugging port if it isn't already.
if ! curl -s -m 3 http://127.0.0.1:9222/json/version >/dev/null 2>&1; then
  open -na "Google Chrome" --args \
    --remote-debugging-port=9222 \
    --user-data-dir="$PROFILE" \
    --no-first-run --no-default-browser-check about:blank
  # Give it a moment to bind the port.
  for i in {1..15}; do
    curl -s -m 2 http://127.0.0.1:9222/json/version >/dev/null 2>&1 && break
    sleep 2
  done
fi

echo "[$(date -u +%FT%TZ)] daily wrapper start" >> "$LOG"
/opt/homebrew/bin/node "$HOME/.openclaw-walker/workspace/site-monitor/qa/daily.mjs" --apply >> "$LOG" 2>&1
echo "[$(date -u +%FT%TZ)] daily wrapper done" >> "$LOG"
