#!/bin/zsh
# LaunchAgent wrapper for the daily QA contest run.
#
# Journeys REQUIRE real Chrome over CDP (stealth is blocked on protected paths
# and produces false findings). This wrapper ensures a dedicated Chrome is up
# on :9222 with a persistent profile — that profile is where a logged-in
# Skechers session lives, so member-area journeys keep working — then runs
# the orchestrator and leaves Chrome running for the next night.

set -e

# CRITICAL: launchd runs with a minimal PATH that excludes /opt/homebrew/bin,
# so bare `node` is not found. journey.mjs uses an absolute node path, but the
# `claude` CLI it spawns runs a SessionEnd hook that calls bare `node` — which
# failed with "node: command not found", killing every lens call and producing
# zero findings. Put Homebrew + local bins on PATH so child processes (claude
# and its hooks) resolve node.
export PATH="/opt/homebrew/bin:/usr/local/bin:$HOME/.local/bin:$PATH"

PROFILE="$HOME/.openclaw-walker/workspace/site-monitor/.chrome-qa-profile"
LOG="$HOME/.openclaw-walker/workspace/site-monitor/logs/qa-daily.log"
mkdir -p "$PROFILE" "$(dirname "$LOG")"

# Bring Chrome up on the debugging port if it isn't already. Wait up to ~60s —
# a cold Chrome launch under launchd was not ready inside the old 30s window,
# so journeys refused to run (correctly) and the night produced nothing.
if ! curl -s -m 3 http://127.0.0.1:9222/json/version >/dev/null 2>&1; then
  open -na "Google Chrome" --args \
    --remote-debugging-port=9222 \
    --user-data-dir="$PROFILE" \
    --no-first-run --no-default-browser-check about:blank
  for i in {1..30}; do
    curl -s -m 2 http://127.0.0.1:9222/json/version >/dev/null 2>&1 && break
    sleep 2
  done
fi

# Abort early with a clear log line if Chrome still isn't reachable — better
# than 3 journeys each failing the real-Chrome guard one by one.
if ! curl -s -m 3 http://127.0.0.1:9222/json/version >/dev/null 2>&1; then
  echo "[$(date -u +%FT%TZ)] ABORT: real Chrome never came up on :9222" >> "$LOG"
  exit 1
fi

echo "[$(date -u +%FT%TZ)] daily wrapper start" >> "$LOG"
/opt/homebrew/bin/node "$HOME/.openclaw-walker/workspace/site-monitor/qa/daily.mjs" --apply >> "$LOG" 2>&1
echo "[$(date -u +%FT%TZ)] daily wrapper done" >> "$LOG"
