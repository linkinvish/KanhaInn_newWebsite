# Kanha Inn – Technical Specification

## Project Info

| Field | Value |
|-------|-------|
| Stack | React + TypeScript + Vite + Tailwind CSS |
| UI Library | shadcn/ui |
| Routing | None (single-page landing) |
| Multi-page | No |

---

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI framework |
| react-dom | ^18.2.0 | DOM renderer |
| framer-motion | ^11.0.0 | Scroll animations, fade-ins, staggered reveals |
| lucide-react | ^0.400.0 | Icon library (all icons throughout) |

---

## Component Inventory

### shadcn/ui Components
This project primarily uses custom components. No shadcn/ui components are needed as the design is highly custom with specific card styles, badges, and button designs.

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| Navbar | - | Fixed navigation with scroll-aware styling |
| HeroSection | - | Full-height hero with image collage background |
| FeaturesSection | - | 6-card feature grid |
| FoodServiceSection | - | 3 food option cards + banner |
| RoomsSection | - | 3 room cards grid |
| LocationSection | - | Map embed section |
| StatsSection | - | Orange stats banner with count-up |
| CTASection | - | Dark CTA with call buttons |
| Footer | - | Multi-column footer |

### Reusable Components

| Component | Props | Description |
|-----------|-------|-------------|
| Button | variant, size, icon, children, href, onClick | Primary/Outline/Green variants |
| FeatureCard | icon, title, description | Icon circle + text card |
| RoomCard | image, title, guests, description, amenities, available, roomCount | Full room card with image |
| SectionHeader | title, subtitle | Centered section heading |
| ScrollReveal | children, delay, className | Wrapper for scroll-triggered animations |
| CountUp | end, suffix, duration | Animated number counter |

---

## Animation Implementation

| Interaction | Library | Implementation Approach | Complexity |
|------------|---------|------------------------|------------|
| Section fade-up reveal | Framer Motion | `useInView` hook + `motion.div` with initial/animate states | Low |
| Hero text stagger | Framer Motion | `motion.div` with staggerChildren in parent, children animate y + opacity | Low |
| Hero Ken Burns | CSS | `@keyframes` scale animation on background container, infinite alternate | Low |
| Navbar scroll effect | React state | `useScroll` or manual scroll listener, toggle class for bg/shadow | Low |
| Card hover lift | Tailwind | `hover:translate-y-[-4px] hover:shadow-lg transition-all` | Low |
| Icon circle pulse | Tailwind | `group-hover:scale-110 transition-transform` | Low |
| Stats count-up | Custom hook | `useCountUp` with requestAnimationFrame, trigger on inView | Medium |
| Button hover | Tailwind | `hover:-translate-y-0.5 active:translate-y-0 transition-transform` | Low |
| Mobile menu | Framer Motion | AnimatePresence + motion.div slide-down | Low |
| Room image zoom | Tailwind | `overflow-hidden` on card, image `hover:scale-105 transition-transform` | Low |

---

## Animation Details

### Scroll Reveal (Global)
- **Trigger**: Element enters viewport at 85% threshold
- **Effect**: opacity 0→1, y: 40→0
- **Duration**: 0.6s
- **Easing**: `[0.22, 1, 0.36, 1]` (ease-out-expo)
- **Stagger**: 0.1s between siblings

### Hero Text Stagger
- **Trigger**: On mount (delay 0.3s)
- **Effect**: opacity 0→1, y: 20→0 per element
- **Duration**: 0.8s
- **Stagger**: 0.15s

### Ken Burns Background
- **Effect**: scale 1.05 → 1.0
- **Duration**: 8s
- **Easing**: linear
- **Iteration**: infinite alternate

### Stats Count-Up
- **Trigger**: Section enters viewport
- **Effect**: Number animates from 0 to target
- **Duration**: 1.5s
- **Easing**: ease-out

---

## State & Logic

### Navbar Scroll State
```typescript
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Count-Up Hook
```typescript
function useCountUp(end: number, inView: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);
  return count;
}
```

### Mobile Menu Toggle
```typescript
const [menuOpen, setMenuOpen] = useState(false);
```

---

## Other Decisions

- **No routing library**: Single page with anchor links (`#features`, `#rooms`, etc.)
- **Google Maps**: Embedded iframe with Kanha Inn Sultanpur Road coordinates
- **Images**: Stored in `public/images/` directory
- **WhatsApp links**: `https://wa.me/918801046444`
- **Phone links**: `tel:+918801046444`
- **No form submissions**: All CTAs are direct contact links
- **No backend**: Static landing page

---

## File Structure

```
src/
  components/
    ui/
      button.tsx          # Custom button component
      feature-card.tsx    # Feature icon card
      room-card.tsx       # Room listing card
      section-header.tsx  # Section title + subtitle
      scroll-reveal.tsx   # Animation wrapper
      count-up.tsx        # Animated counter
    navbar.tsx
    hero-section.tsx
    features-section.tsx
    food-service-section.tsx
    rooms-section.tsx
    location-section.tsx
    stats-section.tsx
    cta-section.tsx
    footer.tsx
  hooks/
    use-scroll.ts         # Scroll position hook
    use-count-up.ts      # Count animation hook
    use-in-view.ts       # Intersection observer hook
  lib/
    utils.ts             # cn() helper
  App.tsx
  main.tsx
  index.css
public/
  images/
    hero-1.jpg
    hero-2.jpg
    hero-3.jpg
    hero-4.jpg
    room-family.jpg
    room-deluxe.jpg
    room-standard.jpg
```
