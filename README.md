# PRONTO ★ ORIGINAL - Nuxt3 Website

A comprehensive, production-ready Nuxt3 implementation of the PRONTO heritage denim store website with 28+ reusable Vue components, TailwindCSS styling, and full TypeScript support.

## Quick Start

```bash
cd app
npm install
npm run dev
```

Development server: `http://localhost:3000`

## Project Overview

### Components (28+)
**Layout & Navigation** (2)
- Navbar - Main navigation with mobile menu & cart
- Default Layout - Page wrapper

**Page Sections** (6)
- HeroSection, AboutSection, BrandsCarousel
- JournalSection, StoresSection, MembershipSection

**UI Elements** (5)
- Button, Badge, Input, Divider, Alert

**Product Components** (4)
- ProductCard, ProductDetail, ImageGallery, SizeGuide

**Advanced** (6+)
- SearchBar, CartItem, CartDrawer, ReviewCard, FeatureSection
- Tabs, Pagination, Breadcrumbs, FilterTags, Modal

See [components/README.md](components/README.md) for full component documentation.

### Composables
Located in `composables/useStore.ts`:
- `useCart()` - Shopping cart management
- `useAuth()` - User authentication
- `useProducts()` - Product filtering & sorting
- `useWishlist()` - Wishlist management
- `useScrollAnimation()` - Auto scroll animations

### Utilities
Located in `utils/`:
- `helpers.ts` - 20+ utility functions (format, validate, etc.)
- `constants.ts` - API endpoints, messages, constants

### Type Definitions
Located in `types/index.ts`:
- Product, CartItem, User, Order, Article, Review types
- ApiResponse, PaginatedResponse interfaces
- Filter, Category, Store type definitions

### Example Pages
- `pages/index.vue` - Homepage
- `pages/products.vue` - Product listing with filters
- `pages/product-detail.vue` - Product detail page example

## Project Structure

```
app/
├── pages/                    # Nuxt pages (auto-routed)
│   ├── index.vue            # Homepage
│   ├── products.vue         # Products listing example
│   └── product-detail.vue   # Product detail example
├── components/              # 28+ reusable components
│   ├── index.ts            # Component exports
│   └── README.md           # Component docs
├── layouts/
│   └── default.vue         # Main layout
├── composables/
│   └── useStore.ts         # State & helpers
├── utils/
│   ├── helpers.ts          # 20+ utilities
│   └── constants.ts        # Config & constants
├── types/
│   └── index.ts            # TypeScript types
├── assets/css/
│   ├── main.css            # Global styles
│   └── tailwind.css        # Font imports
├── public/                 # Static assets
├── DEVELOPER.md            # Developer guide
├── nuxt.config.ts          # Nuxt config
├── tailwind.config.ts      # Tailwind config
└── package.json
```

## Design System

**"Editorial-Raw" Aesthetic** - Premium denim warehouse meets print journalism

**Typography**
- Headlines: Playfair Display (900 weight)
- Body: Merriweather (serif, readable)
- Labels: Courier Prime (monospace, warehouse feel)

**Color Palette**
- Charcoal Ink: #0E0C0A (primary background)
- Paper White: #F5F0E8 (text & accents)
- Tobacco Amber: #B5813A (highlights & CTAs)
- Faded Indigo: #3A4D6B (secondary accents)
- 15+ additional color variations

**Layout**
- 12-column grid with 32px gutters
- 64px margins (desktop), 24px (mobile)
- 120px section spacing
- Sharp corners (0px border-radius)

**Effects**
- Noise texture overlay (0.04 opacity)
- Scroll-triggered reveal animations
- Smooth page transitions
- Responsive image handling

## Features

✅ **28+ Production-Ready Components**
- All fully typed with TypeScript
- Dark mode by default
- Responsive mobile-first design
- Accessibility (ARIA attributes)

✅ **State Management**
- Cart management with composables
- Authentication state
- Product filtering & sorting
- Wishlist tracking

✅ **Developer Experience**
- Full TypeScript support
- Auto-completing component imports
- Comprehensive type definitions
- 20+ utility functions
- Detailed documentation

✅ **Performance**
- Server-side rendering (SSR)
- Optimized Tailwind build
- Image lazy loading
- Code splitting by page

✅ **SEO & Accessibility**
- Meta tags management
- Semantic HTML
- ARIA labels
- Breadcrumbs & pagination

✅ **E-Commerce Ready**
- Product details & variants
- Size guides & charts
- Customer reviews section
- Cart & wishlist
- Search functionality
- Store locator

## Technologies

- **Nuxt 3.8+** - Vue 3 framework
- **TypeScript** - Type safety
- **TailwindCSS 3.3+** - Styling
- **Vue 3.3+** - Composition API
- **Vite** - Build tool

## Installation & Setup

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage Examples

### Using Components
```vue
<Button variant="primary" @click="submit">
  Add to Cart
</Button>

<ProductCard :image="img" :name="name" :price="price" />

<Alert type="success" title="Success!">
  Order placed successfully
</Alert>
```

### Using Composables
```typescript
const { cart, addItem, total } = useCart()
const { products, filters, filteredProducts } = useProducts()
const { wishlist, toggleWishlist } = useWishlist()
```

### Using Utils
```typescript
import { formatCurrency, slugify, isValidEmail } from '~/utils/helpers'

formatCurrency(12500)              // ฿12,500
slugify('Red Wing Boots')          // red-wing-boots
isValidEmail('test@example.com')   // true
```

See [DEVELOPER.md](DEVELOPER.md) for comprehensive documentation.

## Key Files

- **[components/README.md](components/README.md)** - Component documentation
- **[DEVELOPER.md](DEVELOPER.md)** - Developer guide & patterns
- **[components/index.ts](components/index.ts)** - Component exports
- **[utils/helpers.ts](utils/helpers.ts)** - Utility functions
- **[types/index.ts](types/index.ts)** - Type definitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2006-2024 PRONTO ORIGINAL WAREHOUSE. ALL RIGHTS RESERVED.

## Next Steps

1. Review [DEVELOPER.md](DEVELOPER.md) for full guide
2. Check [components/README.md](components/README.md) for component docs
3. Explore example pages in [pages/](pages/)
4. Customize colors in [tailwind.config.ts](tailwind.config.ts)
5. Add API integration using composables
"# pronto-original" 
