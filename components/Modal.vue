<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div v-if="open" class="fixed inset-0 z-50 bg-charcoal-ink/80 backdrop-blur-sm flex items-center justify-center p-4" @click="close">
      <div class="bg-surface-container-high border border-paper-white/10 max-w-md w-full p-8" @click.stop>
        <div class="flex justify-between items-center mb-6">
          <h2 class="font-headline-lg text-headline-lg-mobile text-paper-white">{{ title }}</h2>
          <button @click="close" class="text-on-surface/60 hover:text-paper-white transition-colors">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <slot />
        <div class="flex gap-4 mt-8">
          <Button @click="close" variant="secondary" class="flex-1">
            Close
          </Button>
          <Button @click="$emit('confirm')" variant="primary" class="flex-1">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean
  title: string
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
  'confirm': []
}>()

const close = () => {
  emit('update:open', false)
}
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
