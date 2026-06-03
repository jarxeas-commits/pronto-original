<template>
  <div class="group cursor-pointer">
    <div class="aspect-[3/4] bg-surface-container-high mb-6 relative overflow-hidden border border-paper-white/10 group-hover:border-tobacco-amber/50 transition-colors duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-charcoal-ink to-transparent z-10 opacity-60"></div>
      <img 
        :src="image" 
        :alt="name"
        class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      <div class="absolute bottom-4 left-4 z-20 flex gap-2">
        <Badge :label="category" />
      </div>
      <div v-if="isNew" class="absolute top-4 right-4 z-20">
        <Badge label="NEW" />
      </div>
    </div>
    <h3 class="font-body-md text-body-md font-bold text-paper-white mb-2 group-hover:text-tobacco-amber transition-colors">{{ name }}</h3>
    <p class="font-label-mono text-label-mono text-on-surface/50 mb-4">{{ price }}</p>
    <Button v-if="showButton" variant="secondary" class="text-sm py-2 px-4">
      View Details
    </Button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  name: string
  category: string
  price: string
  isNew?: boolean
  showButton?: boolean
}>()
</script>
