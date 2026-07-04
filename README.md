# OZSTACK Website

Modern, fully responsive company website for **OZSTACK** — built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, client logos, services preview, featured projects |
| `/company` | About us, stats, values |
| `/services` | Full services listing |
| `/products` | In-house products |
| `/case-studies` | Project portfolio (placeholder data) |
| `/news` | News & insights |
| `/contact` | Contact form |

## Customization

- **Logo**: Replace the placeholder in `src/components/Logo.tsx`
- **Projects**: Update fake data in `src/data/projects.ts`
- **Site info**: Edit `src/data/site.ts` (name, email, phone, nav links)
- **Images**: Swap Unsplash URLs in data files with your own assets in `/public`

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons
- TypeScript

## Build

```bash
npm run build
npm start
```
