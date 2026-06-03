<template>
  <section class="h-screen w-full hero-gradient flex flex-col justify-center items-center px-margin-mobile md:px-margin-page text-center relative pt-20">
    <div class="reveal-on-scroll">
      <div class="font-label-mono text-label-mono text-tobacco-amber mb-8 tracking-widest">THE ORIGINAL</div>
      <h1 class="font-display-xl text-paper-white mb-8 max-w-4xl leading-none">PRONTO ★ STORE</h1>
      <div class="inline-block border border-paper-white/20 px-6 py-2 rounded-sm mb-12 transform -rotate-2 bg-charcoal-ink/50 backdrop-blur-sm">
        <span class="font-label-tag text-label-tag text-on-surface/80">EST. 2006</span>
      </div>
      <div class="mt-8">
        <button class="bg-transparent border border-paper-white px-8 py-4 font-label-mono text-label-mono text-paper-white hover:bg-paper-white hover:text-charcoal-ink transition-all duration-300">EXPLORE COLLECTION</button>
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
