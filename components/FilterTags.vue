<template>
  <div class="flex flex-wrap gap-2">
    <button 
      v-for="item in items" 
      :key="item"
      @click="toggle(item)"
      :class="[
        'px-4 py-2 font-label-mono text-label-mono border transition-all duration-300',
        isSelected(item)
          ? 'border-tobacco-amber bg-tobacco-amber/10 text-tobacco-amber'
          : 'border-paper-white/20 text-on-surface hover:border-paper-white/40'
      ]"
    >
      {{ item }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: string[]
  modelValue: string[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

const isSelected = (item: string) => {
  return props.modelValue.includes(item)
}

const toggle = (item: string) => {
  const newValue = isSelected(item)
    ? props.modelValue.filter(i => i !== item)
    : [...props.modelValue, item]
  emit('update:modelValue', newValue)
}
</script>
