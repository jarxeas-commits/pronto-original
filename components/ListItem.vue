<template>
  <div class="group cursor-pointer hover:bg-surface-container-low transition-colors px-4 -mx-4 py-6 border-b border-paper-white/10 last:border-b-0">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-6 flex-1">
        <span class="font-label-mono text-label-mono text-tobacco-amber w-8 flex-shrink-0">{{ number }}</span>
        <div class="flex-1">
          <h4 class="font-body-md text-body-md text-paper-white group-hover:text-tobacco-amber transition-colors">{{ title }}</h4>
          <p v-if="description" class="font-label-mono text-label-mono text-on-surface/50 mt-1">{{ description }}</p>
        </div>
      </div>
      <span class="material-symbols-outlined text-on-surface/30 group-hover:text-tobacco-amber transition-colors flex-shrink-0">arrow_forward</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string | number
  title: string
  description?: string
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
