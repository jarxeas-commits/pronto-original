<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Apply dark mode to html element for Tailwind dark mode
  document.documentElement.classList.add('dark')
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
