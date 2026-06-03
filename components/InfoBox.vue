<template>
  <div class="flex items-center gap-2 px-3 py-2 bg-surface-container-high border border-paper-white/10 hover:border-tobacco-amber/50 transition-all duration-300">
    <span v-if="icon" class="material-symbols-outlined text-tobacco-amber">{{ icon }}</span>
    <div>
      <p class="font-label-tag text-label-tag text-paper-white uppercase">{{ label }}</p>
      <p class="font-body-md text-body-md text-on-surface/70">{{ value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string
  icon?: string
}>()
</script>

<style scoped>
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}
</style>
