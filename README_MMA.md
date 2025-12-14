# House Of Lions MMA Website

A modern, high-impact website for House Of Lions MMA - an elite mixed martial arts training facility that combines world-class coaching with a welcoming family atmosphere.

## 🥋 Features

### Design System
- **Dark Theme**: Deep charcoal backgrounds (#121212) with gold accents (#FFD700)
- **Bold Typography**: Oswald for headings (uppercase, bold) and Inter for body text
- **Color Palette**:
  - Primary: Gold (#FFD700) for CTAs and highlights
  - Secondary: Crimson Red (#B91C1C) for power accents
  - Background: Dark charcoal with subtle variations for depth
- **Shadows**: Dramatic shadows for MMA aesthetic with special gold glow effects

### Pages
1. **Homepage** (`/`)
   - Hero section with cinematic background
   - Why House Of Lions (4 value pillars)
   - Featured programs preview
   - Coach profiles
   - Testimonial carousel
   - Final CTA section

2. **Programs** (`/programs`)
   - Complete program catalog (8 programs)
   - Detailed pricing and features
   - Membership benefits section
   - FAQ section
   - CTA to book trial

3. **About** (`/about`)
   - Gym story and mission
   - Core values (Excellence, Family, Growth, Respect)
   - Full coaching team profiles
   - Extended testimonials
   - Community culture section

4. **Book Free Trial** (`/book-trial`)
   - Contact form with validation
   - Program selection
   - Experience level selection
   - What to expect guide
   - Contact information sidebar
   - Success confirmation screen

### Components

#### Reusable Components
- `HeroSection`: Full-screen hero with background image, overlay, and CTAs
- `ProgramCard`: Pricing card with image, features list, and CTA
- `CoachProfile`: Coach card with image, experience, specialties, and bio
- `TestimonialCarousel`: Auto-rotating testimonial slider with star ratings
- `Navigation`: Responsive navbar with mobile menu
- `Footer`: Multi-column footer with links, contact info, and social media

### Technical Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4 + Custom CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Oswald + Inter)
- **TypeScript**: Full type safety

## 🎨 Design Philosophy

### Typography
- **Headings**: Bold, uppercase, Oswald font for impact
- **Body**: Clean, readable Inter font
- **Hierarchy**: Clear size scale (56px → 16px)
- **Responsive**: Mobile-optimized font sizes

### Color Strategy
- **Gold (#FFD700)**: Premium, achievement, CTAs
- **Crimson (#B91C1C)**: Power, energy, urgency
- **Charcoal (#121212)**: Professional, elite, focused
- **Light Grey (#F2F2F2)**: Readable text on dark backgrounds

### User Experience
- **Smooth Animations**: Fade-in effects, hover states, scroll indicators
- **Mobile-First**: Fully responsive across all devices
- **Accessibility**: High contrast, keyboard navigation, semantic HTML
- **Performance**: Optimized images, lazy loading, efficient CSS

## 📊 Content Strategy

### Target Audiences
1. **Complete Beginners**: Reassuring messaging, beginner-friendly programs
2. **Experienced Fighters**: Advanced training options, competition prep
3. **Parents**: Kids programs emphasizing character development
4. **Fitness Enthusiasts**: Conditioning programs without sparring

### Key Messaging
- **"Train With Pride, Fight With Purpose"**: Main tagline
- **Family Atmosphere**: Not just a gym, you're joining a pride
- **All Levels Welcome**: From first day to fight day
- **Elite + Welcoming**: World-class coaching meets supportive community

### Social Proof
- 5-star testimonials highlighting:
  - Confidence transformation
  - Family-like treatment
  - Welcoming to beginners
  - Results-driven training
  - Perfect balance for all levels

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── programs/page.tsx     # Programs listing
│   ├── about/page.tsx        # About page
│   ├── book-trial/page.tsx   # Contact form
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── navigation.tsx        # Header/nav
│   ├── footer.tsx            # Footer
│   ├── hero-section.tsx      # Hero component
│   ├── program-card.tsx      # Program card
│   ├── coach-profile.tsx     # Coach card
│   └── testimonial-carousel.tsx  # Testimonials
└── components/ui/            # Radix UI primitives
```

## 🎯 Key Implementation Details

### Global CSS Configuration
- Custom CSS variables for colors (HSL format for Tailwind)
- Typography system with font families and scales
- Button and form element defaults
- Shadow utilities for depth
- Responsive typography breakpoints
- Smooth scroll behavior
- Animation keyframes

### Component Patterns
- Client components for interactivity (`'use client'`)
- Server components by default for performance
- Consistent prop interfaces with TypeScript
- Reusable card layouts with hover effects
- Mobile-responsive grid layouts

### Animation System
- Fade-in animations for page load
- Staggered delays for sequential reveals
- Smooth transitions on hover (0.3s ease)
- Scroll indicator bounce animation
- Scale transforms on card hovers

## 🔧 Customization

### Changing Colors
Edit `src/app/globals.css`:
```css
:root {
  --primary: 45 100% 51%;     /* Gold */
  --secondary: 0 73% 41%;     /* Crimson */
  --background: 0 0% 7%;      /* Charcoal */
}
```

### Adding Programs
Edit program data in `src/app/programs/page.tsx`:
```typescript
const allPrograms = [
  {
    title: 'New Program',
    description: '...',
    price: '$X',
    features: [...],
  }
]
```

### Modifying Testimonials
Edit testimonials in `src/app/page.tsx` or `src/app/about/page.tsx`:
```typescript
const testimonials = [
  {
    name: 'Customer Name',
    review: 'Their testimonial...',
    rating: 5,
  }
]
```

## 📝 Notes

- All images use Unsplash placeholders - replace with actual gym photos
- Contact form is frontend-only - add backend API endpoint for production
- Theme is locked to dark mode by default (change in layout.tsx if needed)
- Social media links in footer are placeholders - update with real URLs

## 🏆 Brand Identity

**House Of Lions MMA** represents:
- Elite training meets welcoming community
- Discipline, respect, and family values
- From beginners to champions
- Personal attention in every class
- Building confidence and character through martial arts

**Tagline**: "Train With Pride. Fight With Purpose."
