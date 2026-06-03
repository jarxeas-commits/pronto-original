<template>
  <div :class="['px-4 py-3 rounded-none border mb-4 transition-all duration-300', variantClasses]" role="alert">
    <div class="flex items-start gap-3">
      <span class="material-symbols-outlined flex-shrink-0 mt-0.5">{{ icon }}</span>
      <div class="flex-1">
        <h4 class="font-body-md text-body-md font-bold mb-1">{{ title }}</h4>
        <p class="font-body-md text-body-md text-opacity-90"><slot /></p>
      </div>
      <button v-if="dismissible" @click="dismissed = true" class="flex-shrink-0 hover:opacity-70 transition-opacity">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: 'success' | 'error' | 'warning' | 'info'
  title: string
  dismissible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  dismissible: true
})

const dismissed = ref(false)

const variantClasses = computed(() => {
  if (dismissed.value) return 'hidden'
  
  const variants = {
    success: 'bg-green-900/20 border-green-500/50 text-green-100',
    error: 'bg-red-900/20 border-red-500/50 text-red-100',
    warning: 'bg-yellow-900/20 border-yellow-500/50 text-yellow-100',
    info: 'bg-blue-900/20 border-blue-500/50 text-blue-100'
  }
  return variants[props.type]
})

const icon = computed(() => {
  const icons = {
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
    info: 'info'
  }
  return icons[props.type]
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
</style>
