<template>
  <div class="flex gap-6">
    <a 
      v-for="social in socials" 
      :key="social.name"
      :href="social.url"
      :title="social.name"
      target="_blank"
      rel="noopener noreferrer"
      class="text-on-surface/60 hover:text-tobacco-amber transition-colors duration-300"
    >
      <span class="material-symbols-outlined">{{ social.icon }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
interface Social {
  name: string
  icon: string
  url: string
}

const props = defineProps<{
  socials: Social[]
}>()
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
