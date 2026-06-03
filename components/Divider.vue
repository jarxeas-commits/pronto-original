<template>
  <div class="flex items-center gap-4">
    <div class="h-px flex-1 bg-tobacco-amber/50"></div>
    <span class="font-label-mono text-label-mono text-tobacco-amber whitespace-nowrap">{{ text }}</span>
    <div class="h-px flex-1 bg-tobacco-amber/50"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
