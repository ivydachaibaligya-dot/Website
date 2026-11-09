# AUREVANT Website

**AUREVANT — Global Business Support**
*Your Business. Our Commitment.*

The official website for AUREVANT, a premium boutique virtual assistant agency serving US businesses. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Premium Editorial Design**: Blush pink, warm cream, white, and charcoal palette with Playfair Display and Inter typography
- **Mobile Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Comprehensive metadata for search engine visibility
- **Smooth Animations**: Subtle animations and hover effects
- **Contact Forms**: Consultation request forms with validation
- **Shared Service Data**: All service content lives in `src/lib/services.ts`

## 🧭 Services

1. Administrative & Executive Support
2. Roofing & Home Services Support
3. Lead Generation
4. CRM Management
5. Customer Support & Appointment Setting
6. Digital & Website Support

## 📄 Pages

1. **Home** — Hero, About, Services overview, Our Approach, Platforms, The AUREVANT Standard, FAQ, Contact
2. **Services** — Detailed breakdown of all six service areas with consultation form
3. **About** — Who we are, mission, vision, and values
4. **Contact** — Contact details, next steps, and consultation request form

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ivydachaibaligya-dot/Website.git
cd Website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
Website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About Us page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── services/
│   │   │   └── page.tsx          # Services page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/
│   │   ├── brand/
│   │   │   └── Logo.tsx          # AUREVANT logo & wordmark
│   │   ├── layout/
│   │   │   ├── Navigation.tsx    # Navigation component
│   │   │   └── Footer.tsx        # Footer component
│   │   └── sections/
│   │       ├── About.tsx         # About AUREVANT
│   │       ├── Approach.tsx      # Four-step engagement process
│   │       ├── CallToAction.tsx  # CTA section
│   │       ├── Contact.tsx       # Homepage contact section
│   │       ├── ContactForm.tsx   # Consultation request form
│   │       ├── FAQ.tsx           # FAQ section
│   │       ├── Hero.tsx          # Hero section
│   │       ├── ServicesOverview.tsx # Services preview
│   │       ├── Tools.tsx         # Platforms we support
│   │       └── WhyAurevant.tsx   # The AUREVANT Standard
│   └── lib/
│       └── services.ts           # Service content & contact details
├── public/                       # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🎨 Customization

### Branding

Update the following files to customize branding:

- **Colors**: Brand palette is defined in `src/app/globals.css`
- **Services**: Edit service copy in `src/lib/services.ts`
- **Contact Info**: Update `contactEmail` and `linkedInUrl` in `src/lib/services.ts`
- **Metadata**: Modify SEO metadata in layout and page files

### Images

Replace placeholder images in the `public/` directory with your actual assets:
- Logo
- Team photos
- Service illustrations
- Background images

## 📦 Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure settings
4. Click Deploy

See [Vercel Deployment Instructions](#vercel-deployment-instructions) below for detailed steps.

### Other Platforms

This Next.js application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is proprietary software for AUREVANT.

## 🤝 Support

For support and questions, please contact: ivydachaibaligya@gmail.com

---

Built with Next.js, TypeScript, and Tailwind CSS
