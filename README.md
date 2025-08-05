# Daniel Hall - Personal Blog & Portfolio

A modern, performant Next.js website showcasing my work as a Solutions Architect. Built with cutting-edge technologies and best practices to deliver an exceptional user experience.

**Live Site:** [https://danieljh.uk](https://danieljh.uk)

## About

This is the personal website and blog of **Daniel Hall**, Solutions Architect, featuring:

- Technical blog posts and insights
- Professional portfolio and experience
- Contact information and social links
- Modern, responsive design with smooth animations

## Tech Stack

- **Framework:** Next.js 15.1.6 with App Router
- **Content Management:** Sanity.io headless CMS
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Heroicons, Lucide React, React Icons
- **UI Components:** Radix UI primitives
- **Language:** TypeScript
- **Deployment:** Vercel

## Features

- 🚀 Server-side rendering and static generation
- 📱 Fully responsive design
- ⚡ Optimised performance with Turbopack
- 🎨 Modern UI with smooth animations
- 📝 Blog with rich content support
- 🔍 SEO optimised
- 📧 Contact form integration

## Getting Started

### Prerequisites

- Node.js 22.18.0 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/danielhall/nextjs-daniel-hall-blog.git
cd nextjs-daniel-hall-blog
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Fill in your Sanity project credentials and other required variables.

4. Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Required environment variables (see `.env.example`):

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset (usually 'production')
- `NEXT_PUBLIC_SANITY_API_VERSION` - Sanity API version
- `EMAIL_USER` - Email for contact form
- `EMAIL_PASS` - Email password/app password

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   ├── sanity/             # Sanity client configuration
│   └── utils/              # Utility functions
├── public/                 # Static assets
└── ...config files
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Author

**Daniel Hall**  
Solutions Architect  
[https://danieljh.uk](https://danieljh.uk)

## Licence

Copyright © 2025 Daniel Hall. All rights reserved.

This project is provided for portfolio demonstration purposes. See [LICENSE](./LICENSE) for full terms and conditions.
