<template>
  <div class="relative">
    <button 
      @click="open = !open"
      class="flex items-center justify-between w-full px-4 py-3 border border-paper-white/20 hover:border-paper-white/40 transition-colors duration-300"
      :aria-expanded="open"
    >
      <span class="font-label-mono text-label-mono text-on-surface">{{ label }}</span>
      <span class="material-symbols-outlined transition-transform duration-300" :class="{ 'rotate-180': open }">expand_more</span>
    </button>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="open" class="absolute top-full left-0 right-0 z-50 mt-1 bg-charcoal-ink border border-paper-white/20 shadow-lg">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()

const open = ref(false)
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
