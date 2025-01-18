# Personal Blog Website

[![GitHub Stars](https://img.shields.io/github/stars/Manish-Tamang/Blog?style=social)](https://github.com/Manish-Tamang/Blog)
[![GitHub Forks](https://img.shields.io/github/forks/Manish-Tamang/Blog?style=social)](https://github.com/Manish-Tamang/Blog)

A modern, dynamic personal blog website built with Next.js and Sanity.io by [Manish Tamang](https://github.com/Manish-Tamang).

## 🚀 Quick Overview

This project demonstrates a full-featured blog platform built using modern web technologies. It's based on reverse engineering an existing template to explore Next.js' App Router capabilities. The blog showcases posts from various authors (friends' images used as placeholders) and implements best practices in web development.

## ✨ Key Features

- **Modern Stack**: Built with Next.js, React, and Tailwind CSS
- **Content Management**: Powered by Sanity.io headless CMS
- **Responsive Design**: Optimized for all devices
- **SEO Optimized**: Built-in SEO capabilities
- **Smart Pagination**: Using SWR for efficient data loading
- **Theme Options**: Light and dark mode support
- **Contact Form**: Integrated with web3forms
- **Dynamic OG Images**: Automated Open Graph image generation

## 🛠️ Tech Stack

### Frontend
- Next.js (v13.4.12)
- React (v18.2.0)
- Tailwind CSS (v3.3.1)
- react-icons (Latest)

### Backend & CMS
- Sanity.io (v3.9.0)
- Node.js (v18.16.0)

### Additional Tools
- TypeScript (v5.0.4)
- SWR (Latest)
- vercel/og
- clsx
- date-fns
- next-themes

## 📁 Project Structure

```
├── app/                  # Next.js application directory
│   ├── (sanity)/        # Sanity Studio routes
│   ├── (website)/       # Main website routes
│   ├── api/             # API routes
│   └── providers.jsx    # Theme provider
├── components/          # React components
├── lib/                 # Library files
├── public/             # Static assets
└── styles/             # CSS files
```

[View detailed structure](#detailed-structure)

## 🚀 Getting Started

1. **Clone the Repository**
```bash
git clone https://github.com/Manish-Tamang/Blog.git
cd Blog
```

2. **Install Dependencies**
```bash
npm install
```

3. **Set Up Environment Variables**
Create `.env` file:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-03-25
SANITY_REVALIDATE_SECRET=your_preview_secret
```

4. **Start Sanity Studio**
```bash
npm run sanity
```

5. **Launch Development Server**
```bash
npm run dev
```
Visit `http://localhost:3000` for the blog and `http://localhost:3000/studio` for Sanity Studio.

## 💻 Usage Guide

1. **Content Management**
   - Access Sanity Studio at `/studio`
   - Create and manage blog posts
   - Add and edit author profiles

2. **Customization**
   - Modify content through Sanity Studio
   - Customize codebase as needed
   - Update styling using Tailwind CSS

## 🚀 Deployment

Ready for deployment on Vercel or Netlify:
1. Create a GitHub repository
2. Push your code
3. Connect with your preferred hosting platform
4. Configure environment variables
5. Deploy!


---
Created with ❤️ by [Manish Tamang](https://github.com/Manish-Tamang)