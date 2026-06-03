<template>
  <div class="bg-surface-container-high border border-paper-white/10 p-6">
    <div class="flex items-start gap-4 mb-6">
      <div class="w-12 h-12 rounded-full bg-surface flex items-center justify-center flex-shrink-0">
        <span class="text-xl">★</span>
      </div>
      <div class="flex-1">
        <div class="flex items-center justify-between mb-2">
          <h4 class="font-body-md text-body-md text-paper-white font-bold">{{ name }}</h4>
          <span class="font-label-mono text-label-mono text-on-surface/60">{{ date }}</span>
        </div>
        <div class="flex items-center gap-2 mb-3">
          <span v-for="i in rating" :key="i" class="text-tobacco-amber">★</span>
        </div>
        <p class="font-body-md text-body-md text-on-surface/70">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  date: string
  rating: number
  content: string
}>()
</script>
