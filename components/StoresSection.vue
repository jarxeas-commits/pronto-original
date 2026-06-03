<template>
  <section class="py-editorial-offset bg-surface border-t border-paper-white/5 relative" id="stores">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-mobile md:px-margin-page">
      <div class="reveal-on-scroll">
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-paper-white mb-12">Locations</h2>
        <ul class="space-y-0 border-t border-paper-white/10">
          <li v-for="(store, index) in stores" :key="index" class="py-6 border-b border-paper-white/10 flex justify-between items-center group cursor-pointer hover:bg-surface-container-low transition-colors px-4 -mx-4">
            <div class="flex items-center gap-6">
              <span class="font-label-mono text-label-mono text-tobacco-amber w-6">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="font-body-md text-body-md text-paper-white group-hover:text-tobacco-amber transition-colors">{{ store.name }}</span>
            </div>
            <span class="material-symbols-outlined text-on-surface/30 group-hover:text-tobacco-amber transition-colors">arrow_forward</span>
          </li>
        </ul>
      </div>
      <div class="hidden md:flex justify-center items-center p-12 bg-surface-container-low border border-paper-white/5 reveal-on-scroll">
        <div class="w-full aspect-square rounded-full border border-paper-white/10 relative overflow-hidden opacity-50" style="background: radial-gradient(circle at 30% 30%, transparent 20%, rgba(58, 77, 107, 0.1) 21%, transparent 22%), radial-gradient(circle at 70% 60%, transparent 30%, rgba(58, 77, 107, 0.1) 31%, transparent 32%), linear-gradient(45deg, transparent 48%, rgba(245, 240, 232, 0.05) 49%, rgba(245, 240, 232, 0.05) 51%, transparent 52%); background-size: 100px 100px, 150px 150px, 40px 40px;">
          <div class="absolute top-1/3 left-1/4 w-3 h-3 bg-tobacco-amber rounded-full animate-pulse shadow-[0_0_10px_rgba(181,129,58,0.5)]"></div>
          <div class="absolute top-1/2 left-1/2 w-2 h-2 bg-paper-white/50 rounded-full"></div>
          <div class="absolute bottom-1/3 right-1/3 w-2 h-2 bg-paper-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stores = [
  { name: 'Siam Square Soi 2' },
  { name: 'Terminal 21 Asok' },
  { name: 'Central Ladprao' },
  { name: 'One Bangkok' }
]

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el)
  })
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
