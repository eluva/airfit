# AirFit — website

Website for [AirFit](https://www.instagram.com/airfit_uz/), a women-only fitness studio in Kukcha, Tashkent. Founder and trainer: Arofat Ozodovna.

Single static page, no build step: open `index.html`, or upload `index.html` and `images/` to any static host.

## Editing

- **Schedule**: the `SCHEDULE` object at the bottom of `index.html`.
- **Phone** used by the sign-up form (Telegram / WhatsApp links): `PHONE` in the same script.
- **Prices**: the `PRICES` object in the same script (monthly price per plan for 1 / 3 / 6 months; totals and savings are calculated). Massage / manicure prices and the promo cards are in the `#narxlar` section.
- **Languages** (UZ / RU / EN): Uzbek text lives in the HTML; Russian and English are in `i18n.js`, keyed by the exact Uzbek text. If you change Uzbek text on a page, change its key in `i18n.js` too, or that line stays in Uzbek in RU/EN. `?lang=ru` in a link opens the site in Russian.
- **Logo**: `images/airfit-logo-h.png` (header), `images/airfit-logo.png` (footer), `images/airfit-icon.png` (favicon) — made from `images/logo (2).png`.

## Confirm before launch

These are not verified with the studio yet:

- Class times in the schedule (class types come from AirFit's 1Fit listing, times are made up).
- Prices, and what each plan includes.
- Working hours (Mon–Sat 08:00–21:00).
- That the first day is free (1 visit).
- Daytime-shift discount (12:00–17:00, −15%) — remove the promo card when it ends.
- Massage (120K) and manicure (90K) prices.
- That +998 94 673 94 99 is on Telegram and WhatsApp.
