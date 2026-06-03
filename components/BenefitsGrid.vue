<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
    <div v-for="(benefit, index) in benefits" :key="index" class="flex flex-col items-center text-center p-8 border border-paper-white/10 hover:border-tobacco-amber/50 transition-colors duration-300">
      <span class="material-symbols-outlined text-4xl text-tobacco-amber mb-4">{{ benefit.icon }}</span>
      <h3 class="font-body-md text-body-md text-paper-white mb-2 font-bold">{{ benefit.title }}</h3>
      <p class="font-body-md text-body-md text-on-surface/70">{{ benefit.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Benefit {
  icon: string
  title: string
  description: string
}

defineProps<{
  benefits: Benefit[]
}>()
</script>

<style scoped>
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}
</style>
