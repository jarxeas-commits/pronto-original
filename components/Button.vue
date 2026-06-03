<template>
  <button 
    :class="[
      'font-label-mono text-label-mono transition-all duration-300 px-6 py-3',
      variantClasses
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-paper-white text-charcoal-ink hover:bg-faded-indigo hover:text-paper-white',
    secondary: 'bg-transparent border border-paper-white text-paper-white hover:bg-paper-white hover:text-charcoal-ink',
    tertiary: 'text-on-surface/60 hover:text-tobacco-amber'
  }
  return variants[props.variant]
})
</script>
