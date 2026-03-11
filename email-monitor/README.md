# Walker Email Monitor

Listens to AgentMail over WebSockets for inbound email on `walker@agentmail.to` and hands each new message to Walker via `openclaw agent` for review delivery on Telegram.

## Files
- `.env` - local secrets/config (not committed)
- `index.mjs` - websocket listener
- `state.json` - processed message IDs for dedupe
- `logs/monitor.log` - runtime log

## Run manually
```bash
cd email-monitor
node index.mjs
```
