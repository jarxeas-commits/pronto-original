<template>
  <div class="min-h-screen">
    <!-- Product Grid Page Example -->
    <section class="py-editorial-offset px-margin-mobile md:px-margin-page">
      <div class="mb-12">
        <h1 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-paper-white mb-6">All Products</h1>
        
        <!-- Filters -->
        <div class="flex flex-col md:flex-row gap-8 mb-12">
          <div class="md:w-64 flex-shrink-0">
            <h3 class="font-body-md text-body-md text-paper-white mb-4 font-bold">Filters</h3>
            
            <div class="space-y-6">
              <!-- Price Range Filter -->
              <div>
                <h4 class="font-label-tag text-label-tag text-on-surface-variant uppercase tracking-widest mb-4">Price</h4>
                <div class="flex gap-2">
                  <Input v-model="priceMin" type="number" placeholder="Min" />
                  <Input v-model="priceMax" type="number" placeholder="Max" />
                </div>
              </div>

              <!-- Category Filter -->
              <div>
                <h4 class="font-label-tag text-label-tag text-on-surface-variant uppercase tracking-widest mb-4">Category</h4>
                <FilterTags 
                  :items="['Denim', 'Footwear', 'Apparel']"
                  v-model="selectedCategories"
                />
              </div>

              <!-- Size Filter -->
              <div>
                <h4 class="font-label-tag text-label-tag text-on-surface-variant uppercase tracking-widest mb-4">Size</h4>
                <FilterTags 
                  :items="['XS', 'S', 'M', 'L', 'XL', 'XXL']"
                  v-model="selectedSizes"
                />
              </div>

              <Button variant="secondary" class="w-full" @click="resetFilters">
                Reset Filters
              </Button>
            </div>
          </div>

          <!-- Product Grid -->
          <div class="flex-1">
            <!-- Sort Options -->
            <div class="flex justify-between items-center mb-8">
              <p class="font-label-mono text-label-mono text-on-surface/60">{{ filteredProducts.length }} products</p>
              <Dropdown label="Sort By">
                <button class="block w-full text-left px-4 py-2 hover:bg-surface-container-low transition-colors font-label-mono text-label-mono">Newest</button>
                <button class="block w-full text-left px-4 py-2 hover:bg-surface-container-low transition-colors font-label-mono text-label-mono">Price: Low to High</button>
                <button class="block w-full text-left px-4 py-2 hover:bg-surface-container-low transition-colors font-label-mono text-label-mono">Price: High to Low</button>
              </Dropdown>
            </div>

            <!-- Product Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              <ProductCard 
                v-for="product in filteredProducts" 
                :key="product.id"
                :image="product.image"
                :name="product.name"
                :category="product.category"
                :price="product.price"
                :isNew="product.isNew"
                :showButton="true"
              />
            </div>

            <!-- Pagination -->
            <div class="mt-12 flex justify-center">
              <Pagination :currentPage="1" :totalPages="5" @change="handlePageChange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const priceMin = ref('')
const priceMax = ref('')
const selectedCategories = ref<string[]>([])
const selectedSizes = ref<string[]>([])

// Mock products data
const allProducts = ref([
  {
    id: '1',
    name: 'Red Wing Boots',
    category: 'FOOTWEAR',
    price: '฿10,500 – ฿14,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqMhHKpbC59N_cChOI_N4CtrFbnK-Q9k8y9UrkYDXQmvgTAdHXUkHa19hMn2WC0ss7hue6XmikIV_Q4df9Jx49VhSLOBqAuEIQkipWA1GKz8ievOoMiEV3X2qg5fMw1kJB44rFFd-GtioAXq1J4YCqdKuoG6tXQU3TU2Yv6JyYnPCJpY9inVc3pTnt0VUxgZcQjbx3CHEZmNKiCrPJ4bNlyKfHxZaOTJ9vRgKEr8a8j51Yld6-kJWpoOEHISpuRyPLvfCIU8RpHpo',
    isNew: true
  },
  {
    id: '2',
    name: 'Edwin Jeans',
    category: 'DENIM',
    price: '฿4,900 – ฿8,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgUwtTn6iKy0zjU74gb2q5fdH06pZ_26KwN1Ux_byjBk3LOaaG_YOgyvJSHNETnY2PRGXsxWzyV7ZXL4t5VCAlIaeM1D-j3mWCqWPZtihWoCRKRsfUi-R7TXzMKOZ-so92THMf2EM4wEa5hnoD6MHdzCkTy44luAHbGizeahsdEWzkLX20IjCeq6vZlgFNCcF8tp8AVy4t798hu7iyltG1KnqewsKYxcxaLPJ9e5H7FJCcVDewafQQGmKjzCc0Ei9xYriqiZD576A'
  },
  {
    id: '3',
    name: 'We The Noise',
    category: 'APPAREL',
    price: '฿2,500 – ฿5,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrg7pqETYtv1_l2EfabVnIvB6Wz5V8g-l_ziz0njhV4FvZ0yzp-Yt-VvUJf-H3vfo6dtTciCVjsixkdjm37qpI3LDCK-W1WOGOC6thtDwk4bPd0KexSJfhkRT3zjmcfz0nJZp7LTf1pDJcxXWhA9PcSUoi8SbdXbLr2UZbq3OGhGaaQCVAM6EL4DQE92Hltc48NbJmUFkXiAMs7Lqw6Jkufr6kEQIStN8JCCj_XxPhbwKK15M8CLyD5RnP9L2LkaXSa5qOwyNt4Ek'
  }
])

const filteredProducts = computed(() => {
  return allProducts.value.filter(product => {
    // Category filter
    if (selectedCategories.value.length > 0 && !selectedCategories.value.includes(product.category)) {
      return false
    }
    return true
  })
})

const resetFilters = () => {
  priceMin.value = ''
  priceMax.value = ''
  selectedCategories.value = []
  selectedSizes.value = []
}

const handlePageChange = (page: number) => {
  console.log('Navigate to page', page)
}
</script>
