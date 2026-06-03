# Vue Components Documentation

A comprehensive collection of reusable Vue components for the PRONTO website.

## Core Components

### Layout & Navigation

- **[Navbar.vue](Navbar.vue)** - Main navigation bar with mobile menu and cart counter
- **[FooterSection.vue](FooterSection.vue)** - Footer with newsletter signup
- **[FooterLinks.vue](FooterLinks.vue)** - Footer link columns

### Page Sections

- **[HeroSection.vue](HeroSection.vue)** - Hero banner with CTA
- **[AboutSection.vue](AboutSection.vue)** - Brand story section
- **[BrandsCarousel.vue](BrandsCarousel.vue)** - Product carousel with scroll controls
- **[JournalSection.vue](JournalSection.vue)** - Editorial/blog section
- **[StoresSection.vue](StoresSection.vue)** - Store locations with map
- **[MembershipSection.vue](MembershipSection.vue)** - Membership CTA

## Reusable Components

### UI Elements

- **[Button.vue](Button.vue)** - Customizable button (primary, secondary, tertiary)
  ```vue
  <Button variant="primary" @click="handleClick">Click Me</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="tertiary">Tertiary</Button>
  ```

- **[Badge.vue](Badge.vue)** - Category/tag badge
  ```vue
  <Badge label="NEW" />
  <Badge label="DENIM" />
  ```

- **[Input.vue](Input.vue)** - Form input field
  ```vue
  <Input 
    v-model="email"
    type="email"
    placeholder="Enter email"
    label="Email Address"
  />
  ```

- **[Divider.vue](Divider.vue)** - Decorative divider with text
  ```vue
  <Divider text="OR" />
  ```

### Product Components

- **[ProductCard.vue](ProductCard.vue)** - Product card for grids
  ```vue
  <ProductCard 
    image="/product.jpg"
    name="Product Name"
    category="FOOTWEAR"
    price="฿10,000 – ฿15,000"
    :isNew="true"
    :showButton="true"
  />
  ```

- **[ProductDetail.vue](ProductDetail.vue)** - Detailed product page
  - Image gallery with thumbnails
  - Size selector
  - Stock status
  - Add to cart/wishlist buttons

- **[BenefitsGrid.vue](BenefitsGrid.vue)** - Benefits showcase grid

### Content Components

- **[ArticleCard.vue](ArticleCard.vue)** - Blog/article card
- **[FeatureSection.vue](FeatureSection.vue)** - Feature highlight with image
- **[ReviewCard.vue](ReviewCard.vue)** - Customer review
- **[CategoryCard.vue](CategoryCard.vue)** - Category tile

### Navigation & Organization

- **[ListItem.vue](ListItem.vue)** - Numbered list item
- **[Breadcrumbs.vue](Breadcrumbs.vue)** - Navigation breadcrumbs
- **[Pagination.vue](Pagination.vue)** - Page navigation
- **[Tabs.vue](Tabs.vue)** - Tabbed content

### Forms & Input

- **[SearchBar.vue](SearchBar.vue)** - Product search with autocomplete
  ```vue
  <SearchBar 
    :items="products"
    @select="handleSearch"
  />
  ```

- **[NewsletterForm.vue](NewsletterForm.vue)** - Newsletter signup
- **[FilterTags.vue](FilterTags.vue)** - Multi-select filter tags
- **[Dropdown.vue](Dropdown.vue)** - Dropdown menu

### Modals & Drawers

- **[Modal.vue](Modal.vue)** - Generic modal dialog
  ```vue
  <Modal :open="isOpen" title="Confirm" @confirm="submit">
    <!-- Modal content -->
  </Modal>
  ```

- **[CartDrawer.vue](CartDrawer.vue)** - Slide-out shopping cart

### Advanced Components

- **[ImageGallery.vue](ImageGallery.vue)** - Image gallery with lightbox
  ```vue
  <ImageGallery 
    :images="['img1.jpg', 'img2.jpg']"
    alt="Product"
  />
  ```

- **[SizeGuide.vue](SizeGuide.vue)** - Size chart and measurement guide

- **[CartItem.vue](CartItem.vue)** - Shopping cart item
  ```vue
  <CartItem 
    image="/product.jpg"
    name="Product"
    size="M"
    price="฿10,000"
    @remove="handleRemove"
    @update:quantity="handleQuantityChange"
  />
  ```

- **[Navbar.vue](Navbar.vue)** - Enhanced navigation with menu

### Utilities & Feedback

- **[Alert.vue](Alert.vue)** - Alert/notification message
  ```vue
  <Alert type="success" title="Success!" dismissible>
    Your order has been placed
  </Alert>
  ```

- **[LoadingSpinner.vue](LoadingSpinner.vue)** - Loading indicator
- **[SkeletonLoader.vue](SkeletonLoader.vue)** - Placeholder skeleton

### Social & Info

- **[SocialLinks.vue](SocialLinks.vue)** - Social media links
- **[InfoBox.vue](InfoBox.vue)** - Information card

## Component Architecture

### Props Pattern
All components use TypeScript interfaces for type safety:
```typescript
interface Props {
  label: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}
```

### Events Pattern
Components emit events for parent communication:
```typescript
defineEmits<{
  'click': []
  'update:modelValue': [value: string]
}>()
```

### Slots
Complex components support named slots:
```vue
<Modal>
  <template #header>Custom Header</template>
  <template #default>Modal Content</template>
</Modal>
```

## Styling

All components follow the PRONTO design system:

- **Colors**: Use Tailwind theme (tobacco-amber, faded-indigo, paper-white, charcoal-ink)
- **Typography**: Use font classes (font-display, font-body, font-mono)
- **Spacing**: Use Tailwind spacing scale
- **Animations**: Use Vue Transitions with 300ms duration

## Best Practices

1. **Type Safety**: Always use TypeScript interfaces for props
2. **Accessibility**: Include ARIA attributes where appropriate
3. **Responsive**: Mobile-first design with Tailwind breakpoints
4. **Performance**: Lazy load images and use computed properties
5. **Composition**: Build complex UI from simple components

## Usage Examples

### Building a Product Grid
```vue
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
  <ProductCard 
    v-for="product in products"
    :key="product.id"
    v-bind="product"
  />
</div>
```

### Building a Product Page
```vue
<ImageGallery :images="product.images" :alt="product.name" />
<ProductDetail v-bind="product" />
<Divider text="CUSTOMER REVIEWS" />
<ReviewCard v-for="review in reviews" :key="review.id" v-bind="review" />
```

### Building a Store Locator
```vue
<SearchBar :items="stores" @select="selectStore" />
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
  <InfoBox 
    v-for="store in filteredStores"
    :key="store.id"
    :label="store.name"
    :value="store.address"
    icon="location_on"
  />
</div>
```

## Component Count

- Total Components: 28
- Layout Components: 2
- Section Components: 6
- UI Elements: 5
- Product Components: 3
- Content Components: 4
- Navigation: 4
- Forms: 4
- Modals: 2
- Advanced: 4
- Utilities: 3
- Social/Info: 2

All components are fully typed, responsive, and follow PRONTO design guidelines.
