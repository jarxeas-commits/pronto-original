<template>
  <div class="dark bg-background text-on-surface">
    <HeroSection />
    <AboutSection />
    <BrandsCarousel />
    <JournalSection />
    <StoresSection />
    <MembershipSection />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'PRONTO ★ ORIGINAL - Premium Denim & Heritage Menswear',
  meta: [
    {
      name: 'description',
      content: 'PRONTO - The original purveyor of fine denim and heritage menswear since 2006.'
    }
  ]
})
</script>
