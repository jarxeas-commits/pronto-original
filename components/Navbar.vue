<template>
  <nav class="fixed top-0 w-full z-50 transition-all duration-300 border-b border-paper-white/10 flex justify-between items-center px-margin-mobile md:px-margin-page py-4 max-w-full" :class="scrolled ? 'bg-charcoal-ink/95 backdrop-blur-sm' : 'bg-charcoal-ink'">
    <NuxtLink to="/" class="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tighter text-on-surface hover:text-tobacco-amber transition-colors duration-300">
      PRONTO ★ ORIGINAL
    </NuxtLink>
    
    <div class="hidden md:flex gap-8 items-center">
      <a href="#collections" class="text-on-surface/60 font-label-mono text-label-tag uppercase hover:text-primary transition-colors duration-300">Collections</a>
      <a href="#journal" class="text-on-surface/60 font-label-mono text-label-tag uppercase hover:text-primary transition-colors duration-300">Journal</a>
      <a href="#stores" class="text-on-surface/60 font-label-mono text-label-tag uppercase hover:text-primary transition-colors duration-300">Stores</a>
      <a href="#membership" class="text-on-surface/60 font-label-mono text-label-tag uppercase hover:text-primary transition-colors duration-300">Membership</a>
    </div>
    
    <div class="flex items-center gap-6">
      <button class="font-label-mono text-label-mono hover:text-tobacco-amber transition-colors hidden md:block">Shop Now</button>
      <button class="hover:text-tobacco-amber transition-colors relative" @click="cartOpen = !cartOpen">
        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">shopping_bag</span>
        <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-tobacco-amber text-charcoal-ink font-label-tag text-xs w-5 h-5 flex items-center justify-center rounded-full">{{ cartCount }}</span>
      </button>
      <button class="md:hidden hover:text-tobacco-amber transition-colors" @click="menuOpen = !menuOpen">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="menuOpen" class="absolute top-full left-0 right-0 bg-charcoal-ink border-b border-paper-white/10 md:hidden">
        <div class="flex flex-col gap-4 px-margin-mobile py-6">
          <a href="#collections" class="text-on-surface/60 font-label-mono text-label-tag uppercase hover:text-primary transition-colors duration-300">Collections</a>
          <a href="#journal" class="text-on-surface/60 font-label-mono text-label-tag uppercase hover:text-primary transition-colors duration-300">Journal</a>
          <a href="#stores" class="text-on-surface/60 font-label-mono text-label-tag uppercase hover:text-primary transition-colors duration-300">Stores</a>
          <a href="#membership" class="text-on-surface/60 font-label-mono text-label-tag uppercase hover:text-primary transition-colors duration-300">Membership</a>
          <button class="text-left font-label-mono text-label-mono hover:text-tobacco-amber transition-colors">Shop Now</button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const cartOpen = ref(false)
const scrolled = ref(false)
const cartCount = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 0
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => {})
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
