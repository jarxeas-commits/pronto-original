<template>
  <div class="group cursor-pointer">
    <div class="aspect-video bg-surface-container-high mb-4 relative overflow-hidden border border-paper-white/10 group-hover:border-tobacco-amber/50 transition-colors duration-500">
      <img 
        :src="image" 
        :alt="title"
        class="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 mix-blend-luminosity"
      />
      <div class="absolute top-4 right-4 z-20">
        <Badge :label="volumeLabel" />
      </div>
    </div>
    <div class="max-w-sm">
      <div class="font-label-mono text-label-mono text-tobacco-amber mb-3 tracking-widest border-b border-paper-white/10 pb-3 inline-block w-max">{{ journalLabel }}</div>
      <h3 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-paper-white mb-4 leading-tight group-hover:text-tobacco-amber transition-colors">{{ title }}</h3>
      <p class="font-body-md text-body-md text-on-surface/70 mb-6 leading-relaxed">{{ excerpt }}</p>
      <Button variant="primary">
        Read More
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  volumeLabel: string
  journalLabel: string
  title: string
  excerpt: string
}>()
</script>
