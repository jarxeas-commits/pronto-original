<template>
  <div class="relative w-full max-w-xs">
    <label v-if="label" class="font-label-tag text-label-tag text-on-surface-variant uppercase tracking-widest mb-2 block">{{ label }}</label>
    <input 
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="bg-transparent border-none outline-none w-full font-label-mono text-label-mono text-paper-white placeholder-faded-indigo/50 focus:ring-0 p-0 border-b border-paper-white/30 pb-2 transition-colors duration-300 focus:border-tobacco-amber/50"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  type?: string
  placeholder?: string
  label?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text'
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
