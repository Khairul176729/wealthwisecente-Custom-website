# WealthWise Insurance Platform
 
A modern, AI-powered insurance platform that helps users discover, compare, and apply for personalized insurance coverage through an intuitive digital interface.
 
---
 
## Overview
 
**WealthWise** is a full-featured insurance web application built with Next.js 15 and React 19. It serves as a digital insurance marketplace where users can browse insurance carriers, apply for policies, and manage their insurance portfolio — all from a clean, responsive dashboard.
 
The platform is targeted at individuals and organizations seeking accessible, transparent insurance solutions with a professional online experience.
 
---
 
## Summary
 
| Property       | Details                                      |
|----------------|----------------------------------------------|
| **Framework**  | Next.js 15.2.2 (App Router)                  |
| **UI Library** | React 19, Ant Design 5, Tailwind CSS 4       |
| **Dev Port**   | 3335 (Turbopack)                             |
| **Prod Port**  | 3000                                         |
| **Language**   | JavaScript (JSX)                             |
 
---
 
## Features
 
### Public Website
- **Home Page** — Hero banner, brand carousel, experience highlights, 120+ carrier access, testimonials, contact form
- **About Us** — Company story, professional team, organization showcases
- **Our Services** — Insurance product cards (Life, Health, etc.) with call-to-action
- **Contact Us** — Contact form, embedded Google Maps, office information
 
### Authentication
- User registration and login
- OTP-based password reset flow (6-digit verification)
- Success confirmation screens
 
### User Dashboard
- Browse and search available insurance carriers
- Apply for insurance (dynamic per-carrier application forms)
- View and manage applied insurance policies
- Profile management
- Notification center
 
---
 
## Tech Stack
 
| Category       | Technology                                      |
|----------------|-------------------------------------------------|
| Framework      | Next.js 15.2.2, React 19                        |
| Styling        | Tailwind CSS 4, PostCSS                         |
| UI Components  | Ant Design 5.24.6, React Icons 5.5.0            |
| Carousel       | Swiper 11.2.6                                   |
| Notifications  | React Toastify 11.0.5                           |
| OTP Input      | React OTP Input 3.1.1                           |
| Page Loader    | NextJS TopLoader 3.8.16                         |
| Bundler (dev)  | Turbopack                                       |
 
---
 
## Project Structure
 
```
src/
├── app/
│   ├── (auth)/              # Login, Signup, OTP, Forgot Password
│   ├── (main)/              # Public pages (Home, About, Services, Contact)
│   └── (dashboard)/user/    # User dashboard and insurance management
├── Components/
│   ├── Common/              # Header, Footer, shared sections
│   ├── Home/                # Homepage-specific sections
│   └── userDashboard/       # Dashboard sidebar and header
public/
└── Images/                  # Static image assets
```
 
---
 
## Getting Started
 
First, run the development server:
 
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
 
Open [http://localhost:3335](http://localhost:3335) with your browser to see the result.
 
You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
 
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
 
---
 
## Learn More
 
To learn more about Next.js, take a look at the following resources:
 
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
 
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
 
---
 
## Deploy on Vercel
 
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
 
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.