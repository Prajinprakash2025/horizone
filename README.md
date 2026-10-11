# Horizon Placements — Client Web Application

A modern, high-performance Next.js web application built for **Horizon Placements**, an international healthcare recruitment and documentation consultancy.

---

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Client Features**: Interactive Consultation Modal, WhatsApp Direct Connect, Smooth Section Navigation

---

## 📁 Modular Folder Structure

```text
C:\kavya\horizone/
├── public/
│   ├── logo.png                # Transparent brand logo
│   ├── logo-mark.png           # Executive golden badge icon
│   ├── logo-original.png       # Original provided logo
│   └── hero-professionals.jpg  # Hero composite graphic
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles & keyframe animations
│   │   ├── layout.tsx          # Root layout & SEO metadata
│   │   └── page.tsx            # Main landing page
│   ├── components/
│   │   ├── navbar/
│   │   │   └── Navbar.tsx      # Responsive header with active nav indicator
│   │   ├── hero/
│   │   │   └── Hero.tsx        # Hero section with airplane flight trail & badges
│   │   ├── services/
│   │   │   ├── ServicesSection.tsx # "Our Services" grid matching design
│   │   │   └── ServiceCard.tsx     # Reusable service card component
│   │   ├── why-choose-us/
│   │   │   ├── WhyChooseUsSection.tsx # "Why Choose Us?" feature section
│   │   │   └── FeatureCard.tsx        # Reusable feature card
│   │   ├── about/
│   │   │   └── AboutSection.tsx    # Company background & credentials
│   │   ├── contact/
│   │   │   ├── ContactBanner.tsx   # Dark navy contact card with direct links
│   │   │   └── ContactModal.tsx    # Interactive consultation & inquiry modal
│   │   ├── footer/
│   │   │   └── Footer.tsx          # Clean footer with copyright
│   │   └── ui/
│   │       └── FloatingWhatsApp.tsx # Floating quick WhatsApp chat button
│   ├── data/
│   │   ├── siteConfig.ts       # Contact details, address, navigation links
│   │   ├── services.ts         # Services data (Recruitment, Dataflow, Staffing, etc.)
│   │   └── features.ts         # Why Choose Us data
│   └── types/
│       └── index.ts            # TypeScript interfaces
```

---

## 🏃‍♂️ How to Run

1. Open a terminal in `C:\kavya\horizone`:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:
```bash
npm run build
npm run start
```
