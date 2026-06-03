<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
    <div class="flex flex-col justify-center reveal-on-scroll">
      <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-paper-white mb-6">{{ title }}</h2>
      <p class="font-body-lg text-body-lg text-on-surface/70 mb-8 leading-relaxed">{{ description }}</p>
      <div class="space-y-4">
        <div v-for="(feature, index) in features" :key="index" class="flex items-start gap-4">
          <span class="material-symbols-outlined text-tobacco-amber flex-shrink-0 mt-1">check_circle</span>
          <div>
            <h4 class="font-body-md text-body-md text-paper-white mb-1">{{ feature.title }}</h4>
            <p class="font-label-mono text-label-mono text-on-surface/60">{{ feature.detail }}</p>
          </div>
        </div>
      </div>
      <Button variant="primary" class="mt-8 w-fit">
        Learn More
      </Button>
    </div>
    <div class="relative reveal-on-scroll" style="transition-delay: 100ms;">
      <img :src="image" :alt="title" class="w-full border border-paper-white/10" />
      <div class="absolute inset-0 bg-gradient-to-t from-charcoal-ink to-transparent opacity-20"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Feature {
  title: string
  detail: string
}

defineProps<{
  title: string
  description: string
  image: string
  features: Feature[]
}>()

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
