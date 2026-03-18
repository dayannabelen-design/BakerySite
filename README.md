# Home-Based Microbakery Website

A simpler one-page Next.js + TypeScript + Tailwind site for a home-based microbakery, with a Sanity-powered content model and Bakesy as the checkout destination.

## What's Included

- One-page farmhouse-style marketing site tailored to a home bakery, not a storefront
- Primary `Order on Bakesy` conversion path with reusable analytics hooks
- Sanity schemas for editable site settings, homepage content, menu categories, pickup info, FAQs, and optional notices
- Fallback starter content so the site renders even before CMS credentials are added
- Optional Sanity setup if you want to manage content outside the codebase

## Local Setup

1. Install Node.js 20+.
2. Install dependencies:

```bash
npm install
```

3. Create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-17
SANITY_API_READ_TOKEN=optionalReadToken
SANITY_REVALIDATE_SECRET=yourWebhookSecret
```

4. Start the app:

```bash
npm run dev
```

5. Start Sanity Studio in a separate terminal if needed:

```bash
npm run studio
```

## Content Notes

- Keep the public address limited to neighborhood/city level only.
- Put live product availability, quantities, and checkout inside Bakesy.
- Use the CMS for story, featured bakes, preorder announcements, pickup windows, delivery notes, FAQs, and required notices.
[README.md](https://github.com/user-attachments/files/26096285/README.md)
