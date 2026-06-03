<template>
  <section class="py-editorial-offset px-margin-mobile md:px-margin-page border-t border-paper-white/5 bg-faded-indigo relative overflow-hidden stripe-pattern" id="membership">
    <div class="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto reveal-on-scroll">
      <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-paper-white mb-6">JOIN THE PRONTO CLUB</h2>
      <p class="font-body-md text-body-md text-paper-white/80 mb-10 max-w-lg">
        Exclusive drops, early access, and lifetime repair services for our dedicated community.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <button class="bg-transparent border border-paper-white px-8 py-4 font-label-mono text-label-mono text-paper-white hover:bg-paper-white hover:text-faded-indigo transition-all duration-300 flex items-center justify-center gap-3">
          <span class="material-symbols-outlined">forum</span> CONNECT LINE
        </button>
        <button class="bg-transparent border border-paper-white px-8 py-4 font-label-mono text-label-mono text-paper-white hover:bg-paper-white hover:text-faded-indigo transition-all duration-300 flex items-center justify-center gap-3">
          <span class="material-symbols-outlined">photo_camera</span> INSTAGRAM
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
