<template>
  <section class="py-editorial-offset bg-surface overflow-hidden relative border-t border-paper-white/5" id="collections">
    <div class="px-margin-mobile md:px-margin-page mb-12 flex justify-between items-end reveal-on-scroll">
      <div>
        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-paper-white mb-2">Heritage Brands</h2>
        <p class="font-label-mono text-label-mono text-on-surface/60">CURATED EXCELLENCE</p>
      </div>
      <div class="hidden md:flex gap-4">
        <button @click="scrollLeft" class="p-2 border border-paper-white/20 hover:border-paper-white hover:text-tobacco-amber transition-colors">
          <span class="material-symbols-outlined">arrow_left</span>
        </button>
        <button @click="scrollRight" class="p-2 border border-paper-white/20 hover:border-paper-white hover:text-tobacco-amber transition-colors">
          <span class="material-symbols-outlined">arrow_right</span>
        </button>
      </div>
    </div>
    <div ref="brandCarousel" class="flex overflow-x-auto hide-scrollbar gap-gutter px-margin-mobile md:px-margin-page pb-12 snap-x snap-mandatory">
      <div v-for="(brand, index) in brands" :key="index" class="min-w-[300px] md:min-w-[400px] flex-shrink-0 group cursor-pointer snap-start reveal-on-scroll" :style="{ transitionDelay: `${index * 100}ms` }">
        <div class="aspect-[3/4] bg-surface-container-high mb-6 relative overflow-hidden border border-paper-white/10 group-hover:border-tobacco-amber/50 transition-colors duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal-ink to-transparent z-10 opacity-60"></div>
          <img :src="brand.image" :alt="brand.name" class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"/>
          <div class="absolute bottom-4 left-4 z-20 flex gap-2">
            <span class="bg-charcoal-ink/80 border border-paper-white/20 px-2 py-1 font-label-tag text-label-tag text-paper-white">{{ brand.category }}</span>
          </div>
        </div>
        <h3 class="font-body-md text-body-md font-bold text-paper-white mb-1">{{ brand.name }}</h3>
        <p class="font-label-mono text-label-mono text-on-surface/50">{{ brand.price }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const brandCarousel = ref(null)

const brands = [
  {
    name: 'Red Wing Boots',
    category: 'FOOTWEAR',
    price: '฿10,500 – ฿14,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqMhHKpbC59N_cChOI_N4CtrFbnK-Q9k8y9UrkYDXQmvgTAdHXUkHa19hMn2WC0ss7hue6XmikIV_Q4df9Jx49VhSLOBqAuEIQkipWA1GKz8ievOoMiEV3X2qg5fMw1kJB44rFFd-GtioAXq1J4YCqdKuoG6tXQU3TU2Yv6JyYnPCJpY9inVc3pTnt0VUxgZcQjbx3CHEZmNKiCrPJ4bNlyKfHxZaOTJ9vRgKEr8a8j51Yld6-kJWpoOEHISpuRyPLvfCIU8RpHpo'
  },
  {
    name: 'Edwin Jeans',
    category: 'DENIM',
    price: '฿4,900 – ฿8,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgUwtTn6iKy0zjU74gb2q5fdH06pZ_26KwN1Ux_byjBk3LOaaG_YOgyvJSHNETnY2PRGXsxWzyV7ZXL4t5VCAlIaeM1D-j3mWCqWPZtihWoCRKRsfUi-R7TXzMKOZ-so92THMf2EM4wEa5hnoD6MHdzCkTy44luAHbGizeahsdEWzkLX20IjCeq6vZlgFNCcF8tp8AVy4t798hu7iyltG1KnqewsKYxcxaLPJ9e5H7FJCcVDewafQQGmKjzCc0Ei9xYriqiZD576A'
  },
  {
    name: 'We The Noise',
    category: 'APPAREL',
    price: '฿2,500 – ฿5,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrg7pqETYtv1_l2EfabVnIvB6Wz5V8g-l_ziz0njhV4FvZ0yzp-Yt-VvUJf-H3vfo6dtTciCVjsixkdjm37qpI3LDCK-W1WOGOC6thtDwk4bPd0KexSJfhkRT3zjmcfz0nJZp7LTf1pDJcxXWhA9PcSUoi8SbdXbLr2UZbq3OGhGaaQCVAM6EL4DQE92Hltc48NbJmUFkXiAMs7Lqw6Jkufr6kEQIStN8JCCj_XxPhbwKK15M8CLyD5RnP9L2LkaXSa5qOwyNt4Ek'
  },
  {
    name: 'Pronto Label',
    category: 'ORIGINAL',
    price: '฿1,500 – ฿4,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMjX5PVD_NTHsWUMgPynnBY8RR_ysGBqbYZqau4QLT1Sv6lfHsagvfxpedCif-ku94v4CadUoCJmG8lOu2N_kqnFAtwTQoh15QBfmuvzdi6CA0JlnJbv7x68lV9jDWuErqfesgPedAl1dmqsiqv6CpJSpU3A96pGKt9FrtifXJJhRdsWfn-Td_PiIfwGGc6QbQ1ZdovLcmTwpsbVZqCG9qsu9DliJHDlu47ckWIf1IqO7IhvKvkPc6RCKOYmH9LbLjjEZEjp6O-Co'
  }
]

const scrollLeft = () => {
  if (brandCarousel.value) {
    brandCarousel.value.scrollBy({ left: -400, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (brandCarousel.value) {
    brandCarousel.value.scrollBy({ left: 400, behavior: 'smooth' })
  }
}

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
