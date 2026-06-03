<template>
  <nav class="flex items-center gap-2" aria-label="breadcrumb">
    <div class="flex items-center gap-2">
      <NuxtLink to="/" class="text-on-surface/60 hover:text-tobacco-amber transition-colors font-label-mono text-label-mono">
        Home
      </NuxtLink>
      <span class="text-on-surface/40 font-label-mono text-label-mono">/</span>
    </div>

    <template v-for="(crumb, index) in breadcrumbs" :key="index">
      <div class="flex items-center gap-2">
        <NuxtLink 
          :to="crumb.path"
          :class="[
            'font-label-mono text-label-mono transition-colors',
            index === breadcrumbs.length - 1
              ? 'text-paper-white'
              : 'text-on-surface/60 hover:text-tobacco-amber'
          ]"
          :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-if="index < breadcrumbs.length - 1" class="text-on-surface/40 font-label-mono text-label-mono">/</span>
      </div>
    </template>
  </nav>
</template>

<script setup lang="ts">
interface Breadcrumb {
  label: string
  path: string
}

defineProps<{
  breadcrumbs: Breadcrumb[]
}>()
</script>
