// AirFit order bot: receives sign-ups from the website form and posts them to Telegram.
// Secrets (never in this repo): BOT_TOKEN, CHAT_ID — comma-separated for several chats.
// Var: ALLOWED_ORIGINS — sites allowed to send orders (wrangler.toml).

export default {
  async fetch(req, env) {
    const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
    const origin = req.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': allowed.includes(origin) ? origin : allowed[0] || '',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin',
    };
    const json = (body, status = 200) =>
      new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (req.method !== 'POST') return new Response('AirFit order bot', { headers: cors });
    if (!allowed.includes(origin)) return json({ ok: false, error: 'origin' }, 403);

    let d;
    try { d = await req.json(); } catch { return json({ ok: false, error: 'bad json' }, 400); }
    if (d.website) return json({ ok: true }); // honeypot field: only bots fill it

    const clean = (v, max) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
    const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const name = clean(d.name, 60), tel = clean(d.tel, 30), dir = clean(d.dir, 60), cls = clean(d.class, 120);
    let digits = tel.replace(/\D/g, '');
    if (digits.length === 9) digits = '998' + digits;
    if (!name || digits.length < 9) return json({ ok: false, error: 'invalid' }, 400);

    const time = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent', dateStyle: 'short', timeStyle: 'short' });
    const text = [
      '🆕 <b>Yangi ariza — AirFit</b>',
      '',
      `👤 <b>${esc(name)}</b>`,
      `📞 +${digits}`,
      `🏋️ ${esc(dir)}`,
      cls && `📝 ${esc(cls)}`,
      `🕒 ${time}`,
    ].filter(Boolean).join('\n');
    const reply_markup = digits.startsWith('998') && digits.length === 12
      ? { inline_keyboard: [[{ text: 'WhatsApp', url: `https://wa.me/${digits}` }]] }
      : undefined;

    const sent = await Promise.all(env.CHAT_ID.split(',').map(id =>
      fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: id.trim(), text, parse_mode: 'HTML', reply_markup }),
      }).then(r => r.ok, () => false)
    ));
    return sent.some(Boolean) ? json({ ok: true }) : json({ ok: false, error: 'telegram' }, 502);
  },
};
