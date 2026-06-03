# PRONTO Nuxt3 Website - Developer Guide

Complete guide to developing with the PRONTO Nuxt3 website project.

## Quick Start

```bash
# Navigate to project
cd app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Development server runs on `http://localhost:3000`

## Project Structure

```
app/
├── pages/                    # Nuxt pages (auto-routed)
│   ├── index.vue            # Homepage
│   ├── products.vue         # Products listing
│   └── product-detail.vue   # Product detail page
├── components/              # Reusable Vue components
│   ├── index.ts            # Component exports
│   ├── README.md           # Component documentation
│   ├── Button.vue
│   ├── ProductCard.vue
│   └── ... (28 total components)
├── layouts/                 # Page layouts
│   └── default.vue         # Main layout
├── composables/             # Vue composables
│   └── useStore.ts         # State management & helpers
├── utils/                   # Utility functions
│   ├── helpers.ts          # General helpers
│   ├── constants.ts        # Constants & config
│   └── ...
├── types/                   # TypeScript type definitions
│   └── index.ts            # All types
├── assets/                  # Static assets
│   └── css/                # Stylesheets
├── public/                  # Public files
├── nuxt.config.ts          # Nuxt configuration
├── tailwind.config.ts      # TailwindCSS config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## Available Components

### Layout Components (2)
- **Navbar** - Main navigation with mobile menu
- **Default Layout** - Page wrapper with navbar

### Section Components (6)
- **HeroSection** - Hero banner
- **AboutSection** - Brand story
- **BrandsCarousel** - Product carousel
- **JournalSection** - Blog section
- **StoresSection** - Store locations
- **MembershipSection** - Membership CTA

### UI Components (15+)
- **Button** - Customizable buttons
- **Badge** - Category badges
- **Input** - Form inputs
- **Divider** - Section dividers
- **Alert** - Alert messages
- **Modal** - Dialog modals
- **Dropdown** - Dropdown menus
- **Tabs** - Tabbed content
- **Pagination** - Page navigation
- **Breadcrumbs** - Navigation breadcrumbs
- **LoadingSpinner** - Loading indicator
- **SkeletonLoader** - Content placeholder
- ...and more

### Product Components (4)
- **ProductCard** - Product grid card
- **ProductDetail** - Product detail page
- **ImageGallery** - Image gallery with lightbox
- **SizeGuide** - Size chart

### Advanced Components (5)
- **SearchBar** - Search with autocomplete
- **CartItem** - Shopping cart item
- **CartDrawer** - Cart slide-out drawer
- **ReviewCard** - Customer review
- **FeatureSection** - Feature highlights

See [components/README.md](components/README.md) for full documentation.

## Composables

Located in `composables/useStore.ts`:

### useCart()
Shopping cart state management
```typescript
const { cart, addItem, removeItem, updateQuantity, total, itemCount } = useCart()
```

### useAuth()
User authentication
```typescript
const { user, isAuthenticated, login, logout, register } = useAuth()
```

### useProducts()
Product filtering and sorting
```typescript
const { products, filters, filteredProducts, updateFilter, resetFilters } = useProducts()
```

### useWishlist()
Wishlist management
```typescript
const { wishlist, toggleWishlist, isInWishlist } = useWishlist()
```

### useScrollAnimation()
Automatic scroll animations
```typescript
useScrollAnimation()  // Auto-enables .reveal-on-scroll animations
```

## Utilities

Located in `utils/`:

### helpers.ts
General utility functions:
- `formatCurrency(amount)` - Format to Thai Baht
- `formatDate(date)` - Format dates
- `slugify(text)` - URL-safe text
- `isValidEmail(email)` - Email validation
- `calculateDiscount(original, discounted)` - Discount %
- `debounce(func, wait)` - Debounce function
- `throttle(func, limit)` - Throttle function
- ...and 15+ more

### constants.ts
Configuration constants:
- `API_ENDPOINTS` - API routes
- `ERROR_MESSAGES` - Error strings
- `SUCCESS_MESSAGES` - Success strings
- `PRODUCT_CATEGORIES` - Category list
- `SIZE_CHARTS` - Size data
- `STORES` - Store info
- `SOCIAL_MEDIA` - Social links
- `PAYMENT_METHODS` - Payment types
- `SHIPPING_METHODS` - Shipping options

## Type Definitions

Located in `types/index.ts`:

```typescript
// Products
interface Product { ... }
interface CartItem { ... }
interface Review { ... }

// Users & Auth
interface User { ... }
interface Address { ... }

// Orders
interface Order { ... }

// Content
interface Article { ... }
interface Category { ... }

// API
interface ApiResponse<T> { ... }
interface PaginatedResponse<T> { ... }
```

## Common Patterns

### Using a Component

```vue
<template>
  <Button variant="primary" @click="handleClick">
    Click Me
  </Button>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('Clicked!')
}
</script>
```

### With Props & Events

```vue
<template>
  <ProductCard 
    :image="product.image"
    :name="product.name"
    :price="product.price"
    @click="navigateToProduct"
  />
</template>

<script setup lang="ts">
const navigateToProduct = () => {
  navigateTo(`/products/${product.id}`)
}
</script>
```

### Using Composables

```vue
<template>
  <div>
    <p>Cart items: {{ itemCount }}</p>
    <Button @click="addToCart">Add to Cart</Button>
  </div>
</template>

<script setup lang="ts">
const { addItem, itemCount } = useCart()
const { product } = defineProps<{ product: Product }>()

const addToCart = () => {
  addItem(product, 'M', 1)
}
</script>
```

### Using Utils

```typescript
import { formatCurrency, slugify, isValidEmail } from '~/utils/helpers'

const price = formatCurrency(12500)  // ฿12,500
const slug = slugify('Red Wing Boots')  // red-wing-boots
const valid = isValidEmail('test@example.com')  // true
```

## Styling

### Tailwind Classes

All components use Tailwind CSS. Key custom classes:

```css
/* Colors */
bg-charcoal-ink     /* #0E0C0A */
bg-paper-white      /* #F5F0E8 */
text-tobacco-amber  /* #B5813A */
bg-faded-indigo     /* #3A4D6B */

/* Typography */
font-display        /* Playfair Display */
font-body          /* Merriweather */
font-mono          /* Courier Prime */

/* Spacing */
px-margin-page     /* 64px */
px-margin-mobile   /* 24px */
gap-gutter         /* 32px */
py-editorial-offset /* 120px */

/* Effects */
.noise-overlay     /* Grain texture */
.hero-gradient     /* Background gradient */
.stripe-pattern    /* Repeating stripes */
.reveal-on-scroll  /* Scroll animation */
```

### Custom Animations

```css
/* Fade */
.fade-enter-active { transition: opacity 0.3s ease; }

/* Slide */
.slide-enter-active { transition: transform 0.3s ease; }

/* Scale */
.scale-enter-active { transition: transform 0.3s ease; }
```

## Working with Forms

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <Input 
      v-model="email"
      type="email"
      label="Email Address"
      placeholder="Enter your email"
    />
    <Button type="submit">Submit</Button>
  </form>
</template>

<script setup lang="ts">
const email = ref('')

const handleSubmit = async () => {
  if (isValidEmail(email.value)) {
    // Submit form
  }
}
</script>
```

## Building Lists & Grids

```vue
<template>
  <!-- Product Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
    <ProductCard 
      v-for="product in products"
      :key="product.id"
      v-bind="product"
    />
  </div>

  <!-- List -->
  <ul class="space-y-0 border-t border-paper-white/10">
    <ListItem 
      v-for="(item, index) in items"
      :key="item.id"
      :number="index + 1"
      :title="item.name"
    />
  </ul>
</template>
```

## API Integration

```typescript
// pages/products.vue
const products = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    const { data } = await $fetch(API_ENDPOINTS.PRODUCTS)
    products.value = data
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
```

## State Management

For global state, use `useState`:

```typescript
// Store auth globally
const user = useState<User | null>('auth.user', () => null)
const isAuthenticated = computed(() => user.value !== null)

// Or use composables
const { user, isAuthenticated } = useAuth()
```

## SEO & Meta Tags

```typescript
export default definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Product Name - PRONTO',
  meta: [
    { name: 'description', content: 'Product description...' }
  ]
})
```

## Best Practices

1. **Type Safety** - Always use TypeScript interfaces
2. **Responsive Design** - Mobile-first with Tailwind breakpoints
3. **Accessibility** - Use semantic HTML and ARIA attributes
4. **Performance** - Lazy load images, use computed properties
5. **Composition** - Build from reusable components
6. **Naming** - Use descriptive names for variables & functions
7. **Comments** - Document complex logic
8. **Testing** - Write tests for critical features

## Debugging

### Vue DevTools
Install Vue DevTools browser extension for debugging

### Nuxt DevTools
Built-in Nuxt devtools at bottom right in dev mode

### Console Logging
```typescript
console.log('Value:', value)
console.error('Error:', error)
console.warn('Warning:', warning)
```

## Deployment

### Build for Production
```bash
npm run build
```

Creates optimized `.output/` directory

### Environment Variables
Create `.env` file:
```
NUXT_PUBLIC_API_BASE=https://api.pronto.com
NUXT_SESSION_SECRET=your-secret-key
```

## Troubleshooting

### Components not appearing
- Check imports in page files
- Verify component path in `components/` folder
- Check props and slots match component definition

### Styling issues
- Verify Tailwind classes exist
- Check `tailwind.config.ts` for custom classes
- Review CSS in `assets/css/`

### Build errors
- Clear `.nuxt/` directory
- Run `npm install` again
- Check TypeScript errors: `npm run build`

## Resources

- [Nuxt Documentation](https://nuxt.com/)
- [Vue 3 Guide](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Support

For component-specific help, see [components/README.md](components/README.md)

For component usage examples, check [pages/](pages/) directory.
