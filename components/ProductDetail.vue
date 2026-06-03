<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
    <div>
      <img :src="image" :alt="title" class="w-full aspect-square object-cover border border-paper-white/10 mb-6" />
      <div class="grid grid-cols-3 gap-2">
        <img 
          v-for="(thumb, index) in thumbnails" 
          :key="index"
          :src="thumb" 
          :alt="`Product view ${index + 1}`"
          class="aspect-square object-cover border border-paper-white/10 cursor-pointer hover:border-tobacco-amber/50 transition-colors"
          @click="image = thumb"
        />
      </div>
    </div>

    <div class="flex flex-col justify-between">
      <div>
        <Badge :label="category" class="mb-6" />
        <h1 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-paper-white mb-4">{{ title }}</h1>
        
        <div class="mb-6 pb-6 border-b border-paper-white/10">
          <p class="font-body-lg text-body-lg text-tobacco-amber mb-2">{{ price }}</p>
          <div class="flex items-center gap-2 mb-4">
            <span v-for="i in 5" :key="i" class="text-tobacco-amber">★</span>
            <span class="font-label-mono text-label-mono text-on-surface/60">({{ reviews }} reviews)</span>
          </div>
          <p class="font-body-md text-body-md text-on-surface/70">{{ description }}</p>
        </div>

        <div class="mb-6">
          <h3 class="font-label-tag text-label-tag text-on-surface-variant uppercase tracking-widest mb-3">Select Size</h3>
          <div class="flex gap-2 flex-wrap">
            <button 
              v-for="size in sizes" 
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

        <p v-if="inStock" class="font-label-mono text-label-mono text-tobacco-amber mb-6">IN STOCK</p>
        <p v-else class="font-label-mono text-label-mono text-error mb-6">OUT OF STOCK</p>
      </div>

      <div class="flex gap-4">
        <Button variant="secondary" class="flex-1">
          Add to Wishlist
        </Button>
        <Button variant="primary" class="flex-1" :disabled="!inStock">
          Add to Cart
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  title: string
  price: string
  category: string
  description: string
  reviews: number
  sizes: string[]
  thumbnails: string[]
  inStock: boolean
}>()

const image = ref(props.image)
const selectedSize = ref(props.sizes[0])
</script>
