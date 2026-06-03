<template>
  <div class="flex items-center justify-between py-6 border-b border-paper-white/10 last:border-b-0 hover:bg-surface-container-low transition-colors px-4 -mx-4">
    <div class="flex items-center gap-4 flex-1">
      <img :src="image" :alt="name" class="w-16 h-16 object-cover border border-paper-white/10" />
      <div class="flex-1">
        <h4 class="font-body-md text-body-md text-paper-white mb-1">{{ name }}</h4>
        <p class="font-label-mono text-label-mono text-on-surface/60">Size: {{ size }}</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2 border border-paper-white/20">
        <button @click="quantity--" class="px-2 py-1 hover:bg-paper-white/10 transition-colors" :disabled="quantity <= 1">
          <span class="material-symbols-outlined text-sm">remove</span>
        </button>
        <span class="font-label-mono text-label-mono min-w-[20px] text-center">{{ quantity }}</span>
        <button @click="quantity++" class="px-2 py-1 hover:bg-paper-white/10 transition-colors">
          <span class="material-symbols-outlined text-sm">add</span>
        </button>
      </div>
      <span class="font-body-md text-body-md text-tobacco-amber min-w-[80px] text-right">{{ price }}</span>
      <button @click="remove" class="text-on-surface/60 hover:text-error transition-colors">
        <span class="material-symbols-outlined">delete</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  name: string
  size: string
  price: string
}>()

const quantity = ref(1)

const emit = defineEmits<{
  'remove': []
  'update:quantity': [value: number]
}>()

const remove = () => {
  emit('remove')
}

watch(quantity, (newVal) => {
  emit('update:quantity', newVal)
})
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

.material-symbols-outlined.text-sm {
  font-size: 18px;
}
</style>
