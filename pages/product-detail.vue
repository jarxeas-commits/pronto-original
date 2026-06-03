<template>
  <div class="min-h-screen">
    <!-- Product Detail Page Example -->
    <section class="py-editorial-offset px-margin-mobile md:px-margin-page">
      <!-- Breadcrumbs -->
      <Breadcrumbs 
        :breadcrumbs="[
          { label: 'Products', path: '/products' },
          { label: 'Footwear', path: '/products?category=footwear' },
          { label: 'Red Wing Boots', path: '#' }
        ]"
        class="mb-12"
      />

      <!-- Main Product Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
        <!-- Image Gallery -->
        <div>
          <ImageGallery 
            :images="[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAqMhHKpbC59N_cChOI_N4CtrFbnK-Q9k8y9UrkYDXQmvgTAdHXUkHa19hMn2WC0ss7hue6XmikIV_Q4df9Jx49VhSLOBqAuEIQkipWA1GKz8ievOoMiEV3X2qg5fMw1kJB44rFFd-GtioAXq1J4YCqdKuoG6tXQU3TU2Yv6JyYnPCJpY9inVc3pTnt0VUxgZcQjbx3CHEZmNKiCrPJ4bNlyKfHxZaOTJ9vRgKEr8a8j51Yld6-kJWpoOEHISpuRyPLvfCIU8RpHpo'
            ]"
            alt="Red Wing Boots"
          />
        </div>

        <!-- Product Info -->
        <div class="flex flex-col justify-between">
          <div>
            <Badge label="FOOTWEAR" class="mb-6" />
            <h1 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-paper-white mb-4">Red Wing Boots</h1>
            
            <div class="mb-6 pb-6 border-b border-paper-white/10">
              <p class="font-body-lg text-body-lg text-tobacco-amber mb-2">฿12,500</p>
              <div class="flex items-center gap-2 mb-4">
                <span v-for="i in 5" :key="i" class="text-tobacco-amber">★</span>
                <span class="font-label-mono text-label-mono text-on-surface/60">(24 reviews)</span>
              </div>
              <p class="font-body-md text-body-md text-on-surface/70">Iconic heritage footwear with premium leather construction and authentic workwear aesthetics.</p>
            </div>

            <!-- Size Selector -->
            <div class="mb-6">
              <h3 class="font-label-tag text-label-tag text-on-surface-variant uppercase tracking-widest mb-3">Select Size</h3>
              <div class="flex gap-2 flex-wrap">
                <button 
                  v-for="size in ['6', '7', '8', '9', '10', '11', '12']" 
                  :key="size"
                  @click="selectedSize = size"
                  :class="[
                    'px-4 py-2 border font-label-mono text-label-mono transition-all duration-300',
                    selectedSize === size
                      ? 'border-tobacco-amber bg-tobacco-amber/10 text-tobacco-amber'
                      : 'border-paper-white/20 text-on-surface hover:border-paper-white/40'
                  ]"
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <p class="font-label-mono text-label-mono text-tobacco-amber mb-6">IN STOCK</p>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-4">
            <Button variant="secondary" class="flex-1">
              Add to Wishlist
            </Button>
            <Button variant="primary" class="flex-1">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <Divider text="PRODUCT DETAILS" class="my-12" />

      <!-- Tabs for Details -->
      <Tabs 
        :tabs="[
          { id: 'description', label: 'Description' },
          { id: 'care', label: 'Care Instructions' },
          { id: 'shipping', label: 'Shipping & Returns' }
        ]"
        class="mb-12"
      >
        <template #tab-description>
          <div class="max-w-3xl">
            <p class="font-body-md text-body-md text-on-surface/70 mb-4 leading-relaxed">
              Red Wing Boots represents timeless American craftsmanship. Each pair is meticulously constructed with premium leather that develops a unique patina with wear.
            </p>
            <p class="font-body-md text-body-md text-on-surface/70 leading-relaxed">
              The heritage construction ensures durability and lasting comfort, making these boots a true investment piece for any wardrobe.
            </p>
          </div>
        </template>

        <template #tab-care>
          <div class="max-w-3xl space-y-4">
            <div v-for="instruction in careInstructions" :key="instruction.title" class="flex gap-4">
              <span class="material-symbols-outlined text-tobacco-amber flex-shrink-0 mt-0.5">done</span>
              <div>
                <h4 class="font-body-md text-body-md text-paper-white mb-1">{{ instruction.title }}</h4>
                <p class="font-body-md text-body-md text-on-surface/70">{{ instruction.detail }}</p>
              </div>
            </div>
          </div>
        </template>

        <template #tab-shipping>
          <div class="max-w-3xl space-y-4">
            <div class="font-body-md text-body-md text-on-surface/70">
              <p class="mb-3">Free shipping on orders over ฿2,000</p>
              <p class="mb-3">30-day return policy for unworn items</p>
              <p>Estimated delivery: 3-5 business days</p>
            </div>
          </div>
        </template>
      </Tabs>

      <!-- Benefits Section -->
      <BenefitsGrid 
        :benefits="[
          { icon: 'verified', title: 'Authentic Heritage', description: 'Genuine Red Wing craftsmanship' },
          { icon: 'local_shipping', title: 'Free Shipping', description: 'On orders over ฿2,000' },
          { icon: 'assignment_return', title: '30-Day Returns', description: 'Hassle-free return policy' }
        ]"
        class="mb-12"
      />

      <!-- Size Guide -->
      <SizeGuide 
        :sizeData="sizeData"
        :instructions="sizeInstructions"
        class="mb-12"
      />

      <!-- Customer Reviews -->
      <div class="mb-12">
        <Divider text="CUSTOMER REVIEWS" class="mb-8" />
        <div class="space-y-6">
          <ReviewCard 
            v-for="review in reviews" 
            :key="review.id"
            v-bind="review"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const selectedSize = ref('9')

const careInstructions = [
  { title: 'Clean Regularly', detail: 'Wipe down with a dry cloth after each wear' },
  { title: 'Condition Leather', detail: 'Use leather conditioner monthly to maintain softness' },
  { title: 'Proper Storage', detail: 'Store in a cool, dry place away from direct sunlight' },
  { title: 'Professional Care', detail: 'Visit a cobbler for sole repairs and deep conditioning' }
]

const sizeData = [
  { size: '6', us: '6', eu: '39', cm: '24.5' },
  { size: '7', us: '7', eu: '40', cm: '25' },
  { size: '8', us: '8', eu: '41', cm: '25.5' },
  { size: '9', us: '9', eu: '42', cm: '26' },
  { size: '10', us: '10', eu: '43', cm: '26.5' },
  { size: '11', us: '11', eu: '44', cm: '27' }
]

const sizeInstructions = [
  { title: 'Foot Length', detail: 'Measure from heel to longest toe' },
  { title: 'Shoe Width', detail: 'Measure across the widest part of your foot' },
  { title: 'Fit Check', detail: 'There should be a thumb width space at the toe' }
]

const reviews = [
  { id: '1', name: 'John Smith', date: 'June 1, 2024', rating: 5, content: 'Exceptional quality and comfort. Worth every penny.' },
  { id: '2', name: 'Jane Doe', date: 'May 28, 2024', rating: 5, content: 'These boots have become my daily wear. Highly recommended!' },
  { id: '3', name: 'Mike Johnson', date: 'May 25, 2024', rating: 4, content: 'Great boots, took a few days to break in but excellent once they do.' }
]
</script>

<style scoped>
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}
</style>
