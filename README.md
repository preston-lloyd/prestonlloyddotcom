This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Sanity Content Setup

All site content is editable in Sanity Studio at `/studio`.

**First-time setup:**
1. Deploy the schema: `npx sanity schema deploy`
2. Seed initial content: `pnpm exec tsx scripts/seed-sanity.ts` (requires `SANITY_API_TOKEN` in `.env.local` with write access)

Or create documents manually in the Studio: **Site Settings**, **Contact Page**, and **Projects**.

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This repo is a pnpm monorepo. To deploy the Next.js app on Vercel:

1. **Import the repo** in the [Vercel Dashboard](https://vercel.com/new) and create a project.

2. **Set Root Directory** to `apps/web`  
   (Project Settings → General → Root Directory → Edit → enter `apps/web` → Save).

3. **Environment variables**  
   Add your env vars in Project Settings → Environment Variables (e.g. `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`, and any others you use like `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`).

4. **Build**  
   The app uses `apps/web/vercel.json`, which runs install from the monorepo root (`cd ../.. && pnpm install`) so the `@prestonlloyddotcom/sanity` workspace is available. No extra Build/Install overrides are needed in the dashboard unless you want to change them.

Then deploy. The framework is auto-detected as Next.js.
