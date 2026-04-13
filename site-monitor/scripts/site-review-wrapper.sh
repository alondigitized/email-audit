#!/bin/bash
# Wrapper that adds 0-30min schedule jitter before launching site-review.
# Called by the LaunchAgent instead of node directly so each persona's daily
# run starts at a randomized time within its 30-min window — looks human,
# evades fingerprintable bot patterns, spreads load.
#
# Usage: site-review-wrapper.sh --persona <slug>

set -e

# Random integer in [0, 1800) seconds → 0 to 30 min
JITTER=$((RANDOM % 1800))

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_REVIEW="$SCRIPT_DIR/../site-review.mjs"
NODE_BIN="${NODE_BIN:-/opt/homebrew/bin/node}"

echo "[wrapper] $(date -u +%Y-%m-%dT%H:%M:%SZ) sleeping ${JITTER}s before launching site-review with args: $*"
sleep "$JITTER"
echo "[wrapper] $(date -u +%Y-%m-%dT%H:%M:%SZ) launching site-review"

exec "$NODE_BIN" "$SITE_REVIEW" "$@"
