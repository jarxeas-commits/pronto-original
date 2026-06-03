<template>
  <div class="flex items-center gap-2 px-3 py-1 bg-charcoal-ink/80 border border-paper-white/20 backdrop-blur-sm rounded-none">
    <span class="font-label-tag text-label-tag text-paper-white uppercase">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
