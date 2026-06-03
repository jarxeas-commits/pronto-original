<template>
  <div class="flex gap-6 border-b border-paper-white/10">
    <button 
      v-for="tab in tabs" 
      :key="tab.id"
      @click="activeTab = tab.id"
      :class="[
        'px-6 py-4 font-label-mono text-label-mono transition-all duration-300 border-b-2',
        activeTab === tab.id
          ? 'border-tobacco-amber text-tobacco-amber'
          : 'border-transparent text-on-surface/60 hover:text-on-surface'
      ]"
      :aria-selected="activeTab === tab.id"
      role="tab"
    >
      {{ tab.label }}
    </button>
  </div>

  <div class="mt-8">
    <slot :name="`tab-${activeTab}`" />
  </div>
</template>

<script setup lang="ts">
interface Tab {
  id: string
  label: string
}

defineProps<{
  tabs: Tab[]
}>()

const activeTab = ref<string>('')

onMounted(() => {
  const props = defineProps<{ tabs: Tab[] }>()
  if (props.tabs.length > 0) {
    activeTab.value = props.tabs[0].id
  }
})
</script>
