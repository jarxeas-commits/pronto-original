<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter py-editorial-offset px-margin-mobile md:px-margin-page border-t border-paper-white/5">
    <div v-for="column in footerLinks" :key="column.title" class="flex flex-col gap-4">
      <h4 class="font-label-mono text-label-tag text-on-surface-variant uppercase tracking-widest mb-2">{{ column.title }}</h4>
      <nav class="flex flex-col gap-3">
        <a 
          v-for="link in column.links" 
          :key="link.label"
          :href="link.href"
          class="font-label-tag text-label-tag text-on-surface-variant hover:text-tobacco-amber underline underline-offset-4 w-fit transition-colors duration-300"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

defineProps<{
  footerLinks: FooterColumn[]
}>()
</script>
