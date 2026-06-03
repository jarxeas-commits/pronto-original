<template>
  <section class="py-editorial-offset bg-charcoal-ink border-t border-paper-white/5" id="journal">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-page">
      <div class="md:col-span-6 reveal-on-scroll">
        <div class="aspect-[4/5] bg-surface-container-low border border-paper-white/10 relative overflow-hidden group">
          <img class="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlhuq1KcIJveCgMohwMNfFrlbf5GJzsimUwgANLgppYfYHvuQACM9R3_c33tLECjKHFxwF5SMa85dX0sninZAF83lHe_8bDl4FDVyv2TKYUaSCaE4RKyDgePoxWKxOoxZGq1wlrrGvpFKqZdDt2HpPopGii8mXHd8lHcDXeFL8KLcNAcAxq7PbduneV8YemtKn8SdukD8UUf-Km6HDz6WSZOin4Y8hZemlnHnm-d4YcHwvF2-xAA9vX7vcJdEPMp8F06B0OMm6O4k" alt="Artisan craftsmanship"/>
          <div class="absolute top-4 right-4 bg-charcoal-ink/80 border border-paper-white/20 px-3 py-1 backdrop-blur-sm">
            <span class="font-label-mono text-label-mono text-paper-white">VOL. 24</span>
          </div>
        </div>
      </div>
      <div class="md:col-span-5 md:col-start-8 flex flex-col justify-center mt-12 md:mt-0 reveal-on-scroll">
        <div class="font-label-mono text-label-mono text-tobacco-amber mb-6 tracking-widest border-b border-paper-white/10 pb-4 inline-block w-max">JOURNAL № 01</div>
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-paper-white mb-6 leading-tight">The Craft That Doesn't Age</h2>
        <p class="font-body-md text-body-md text-on-surface/70 mb-8 leading-relaxed">
          Exploring the meticulous process behind hand-dyed indigo and the artisans who refuse to compromise. In a world of fast fashion, durability is the ultimate rebellion.
        </p>
        <div>
          <button class="bg-paper-white text-charcoal-ink px-6 py-3 font-label-mono text-label-mono hover:bg-faded-indigo hover:text-paper-white transition-colors duration-300">READ FULL STORY</button>
        </div>
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
