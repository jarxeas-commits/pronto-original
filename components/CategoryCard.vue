<template>
  <div class="group cursor-pointer">
    <div class="aspect-square bg-surface-container-high mb-4 relative overflow-hidden border border-paper-white/10 group-hover:border-tobacco-amber/50 transition-colors duration-500">
      <img 
        :src="image" 
        :alt="name"
        class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
    <h4 class="font-body-md text-body-md text-paper-white mb-2 group-hover:text-tobacco-amber transition-colors">{{ name }}</h4>
    <p class="font-label-mono text-label-mono text-on-surface/60 mb-3">{{ description }}</p>
    <Button variant="secondary" class="text-sm py-2 px-4">
      Explore
    </Button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  name: string
  description: string
}>()
</script>
