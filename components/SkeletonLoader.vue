<template>
  <div class="space-y-4">
    <div v-for="i in count" :key="i" class="animate-pulse">
      <div class="h-64 bg-surface-container-high border border-paper-white/10 mb-4"></div>
      <div class="h-4 bg-surface-container-high mb-2 w-3/4"></div>
      <div class="h-4 bg-surface-container-high w-1/2"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count?: number
}>()
</script>
