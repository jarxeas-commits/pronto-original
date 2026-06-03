<template>
  <div class="relative pt-16">
    <Transition name="fade">
      <div v-if="visible" class="fixed inset-0 z-40 bg-charcoal-ink/50 backdrop-blur-sm" @click="close"></div>
    </Transition>
    
    <Transition name="slide">
      <div v-if="visible" class="fixed bottom-0 right-0 z-50 w-full max-w-md bg-charcoal-ink border-l border-t border-paper-white/10">
        <div class="flex justify-between items-center p-6 border-b border-paper-white/10">
          <h3 class="font-headline-lg text-headline-lg-mobile text-paper-white">Cart</h3>
          <button @click="close" class="text-on-surface/60 hover:text-paper-white transition-colors">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div class="p-6 max-h-96 overflow-y-auto">
          <slot />
        </div>
        
        <div class="border-t border-paper-white/10 p-6 bg-surface-container-low">
          <div class="flex justify-between items-center mb-4">
            <span class="font-label-mono text-label-mono text-on-surface/60">TOTAL</span>
            <span class="font-headline-lg text-headline-lg text-paper-white">{{ total }}</span>
          </div>
          <Button variant="primary" class="w-full">
            Checkout
          </Button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
  total: string
}>()

const emit = defineEmits<{
  'close': []
}>()

const close = () => {
  emit('close')
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
