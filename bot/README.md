# AirFit order bot

The website form posts sign-ups here; this Cloudflare Worker sends them to Telegram via the bot. The bot token lives only in Cloudflare secrets, never in the site or this repo.

## Setup (once)

1. Write `/start` to the bot in Telegram (or add it to a staff group and write any message there).
2. Find the chat ID: open `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `message.chat.id` (group IDs start with `-`).
3. Deploy from this folder:
   ```sh
   npx wrangler login
   npx wrangler deploy
   npx wrangler secret put BOT_TOKEN
   npx wrangler secret put CHAT_ID      # several chats: 123,-456
   ```
4. Put the printed `https://airfit-orders.<account>.workers.dev` URL into `ORDER_URL` in `main.js`.

If `ORDER_URL` is empty or the bot is unreachable, the form falls back to the Telegram / WhatsApp links.

## Changing things

- Who gets orders: `npx wrangler secret put CHAT_ID`.
- New site domain: add it to `ALLOWED_ORIGINS` in `wrangler.toml` and `npx wrangler deploy`.
