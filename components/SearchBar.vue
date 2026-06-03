<template>
  <div class="relative w-full">
    <input 
      v-model="searchQuery"
      type="text"
      placeholder="Search products..."
      class="w-full px-4 py-3 bg-surface-container-high border border-paper-white/10 text-paper-white font-label-mono text-label-mono placeholder-faded-indigo/50 focus:border-tobacco-amber/50 focus:outline-none transition-colors"
      @input="handleSearch"
    />
    <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface/60">search</span>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="results.length > 0 && searchQuery" class="absolute top-full left-0 right-0 z-50 mt-2 bg-surface-container-high border border-paper-white/10 max-h-96 overflow-y-auto">
        <button 
          v-for="result in results" 
          :key="result.id"
          @click="selectResult(result)"
          class="w-full px-4 py-3 text-left hover:bg-surface-container-low transition-colors flex items-center gap-3 border-b border-paper-white/5 last:border-b-0"
        >
          <img v-if="result.image" :src="result.image" :alt="result.name" class="w-10 h-10 object-cover border border-paper-white/10" />
          <div class="flex-1">
            <p class="font-body-md text-body-md text-paper-white">{{ result.name }}</p>
            <p class="font-label-mono text-label-mono text-on-surface/60">{{ result.category }}</p>
          </div>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface SearchResult {
  id: string
  name: string
  category: string
  image?: string
}

interface Props {
  items: SearchResult[]
}

const props = defineProps<Props>()

const searchQuery = ref('')
const results = ref<SearchResult[]>([])

const emit = defineEmits<{
  'select': [item: SearchResult]
}>()

const handleSearch = (e: Event) => {
  const query = (e.target as HTMLInputElement).value.toLowerCase()
  
  if (query.length > 0) {
    results.value = props.items.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    ).slice(0, 8)
  } else {
    results.value = []
  }
}

const selectResult = (result: SearchResult) => {
  emit('select', result)
  searchQuery.value = ''
  results.value = []
}
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
