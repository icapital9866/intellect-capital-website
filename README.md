# Intellect Capital LLC — Website (Next.js Static)

This is a static-export Next.js website for Intellect Capital LLC.

## Requirements
- Node.js 18+

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build (static export)
```bash
npm run build
```

Next.js will generate a static site in `out/`.

## Deploy on Vercel (recommended)
1. Create a GitHub repo and push this project.
2. In Vercel: New Project → Import from GitHub.
3. Framework: Next.js (auto-detected)
4. Build Command: `next build`
5. Output Directory: `out` (Vercel will handle with Next.js export)

## Point your Squarespace domain to Vercel
In Squarespace Domains → DNS settings, add the records Vercel provides:
- A record(s) for apex/root domain
- CNAME for `www`

Do NOT delete existing MX records if you use email.

## Contact form
The contact form currently uses `mailto:` for simplicity.
If you want a professional form, add a Vercel serverless endpoint + email provider (SendGrid/Mailgun)
or Microsoft 365 + Power Automate integration.
