# Rudy Paningal Portfolio

A modern portfolio website featuring a tempered and liquid glass design with Apple-style aesthetics, showcasing Rudy Paningal's skills, education, and projects.

## Features

- 🎨 Glassmorphism design with Apple-inspired space black and purple theme
- 🌌 Interactive particle background
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 📄 Sections for Home, Education, Skills, Projects, and Contact

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS (for contact form)
- tsParticles (for background effects)

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rudypaningal/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Configuration

### Contact Form

To make the contact form work, you need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service that connects to your email provider
3. Create an email template
4. Update the EmailJS configuration in `src/components/ContactForm.tsx` with your credentials:

```tsx
await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current!,
  'YOUR_PUBLIC_KEY'
);
```

### Images

- Replace the placeholder images in the `public/images` folder with your actual images
- For the profile picture, use an Apple Memoji-style image at `public/images/profile-memoji.png`
- For project thumbnails, use images at `public/images/project-1.jpg` through `project-7.jpg`

## Customization

- Colors and theme: Edit the CSS variables in `src/app/globals.css`
- Content: Update the data in each component file
- Social links: Edit the URLs in `src/components/HeroSection.tsx`

## Deployment

The easiest way to deploy this app is using the [Vercel Platform](https://vercel.com/new).

## License

This project is open source and available under the [MIT License](LICENSE).
