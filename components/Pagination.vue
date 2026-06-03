<template>
  <div class="flex items-center justify-center gap-2">
    <button 
      v-for="i in totalPages" 
      :key="i"
      @click="$emit('change', i)"
      :aria-current="i === currentPage ? 'page' : undefined"
      :class="[
        'px-3 py-2 font-label-mono text-label-mono border transition-all duration-300',
        i === currentPage
          ? 'border-tobacco-amber bg-tobacco-amber/10 text-tobacco-amber'
          : 'border-paper-white/20 text-on-surface hover:border-paper-white/40'
      ]"
    >
      {{ i }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number
  totalPages: number
}>()

defineEmits<{
  'change': [page: number]
}>()
</script>
