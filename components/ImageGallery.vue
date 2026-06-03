<template>
  <div class="relative">
    <div class="aspect-square bg-surface-container-high border border-paper-white/10 mb-6 relative overflow-hidden group cursor-zoom-in" @click="openLightbox">
      <img 
        :src="currentImage" 
        :alt="alt"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    <div class="grid grid-cols-5 gap-2">
      <button 
        v-for="(image, index) in images" 
        :key="index"
        @click="currentImage = image"
        :class="[
          'aspect-square border transition-all duration-300',
          currentImage === image
            ? 'border-tobacco-amber'
            : 'border-paper-white/10 hover:border-tobacco-amber/50'
        ]"
      >
        <img :src="image" :alt="`View ${index + 1}`" class="w-full h-full object-cover" />
      </button>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div v-if="lightboxOpen" class="fixed inset-0 z-50 bg-charcoal-ink/95 backdrop-blur-sm flex items-center justify-center p-4" @click="closeLightbox">
        <button @click="closeLightbox" class="absolute top-6 right-6 text-paper-white hover:text-tobacco-amber transition-colors">
          <span class="material-symbols-outlined text-4xl">close</span>
        </button>

        <div class="relative max-w-4xl w-full" @click.stop>
          <button @click="prevImage" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-paper-white hover:text-tobacco-amber transition-colors">
            <span class="material-symbols-outlined text-4xl">arrow_back</span>
          </button>

          <img :src="currentImage" :alt="alt" class="w-full max-h-96 object-contain" />

          <button @click="nextImage" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-paper-white hover:text-tobacco-amber transition-colors">
            <span class="material-symbols-outlined text-4xl">arrow_forward</span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[]
  alt: string
}>()

const currentImage = ref(props.images[0])
const lightboxOpen = ref(false)

const openLightbox = () => {
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const nextImage = () => {
  const currentIndex = props.images.indexOf(currentImage.value)
  const nextIndex = (currentIndex + 1) % props.images.length
  currentImage.value = props.images[nextIndex]
}

const prevImage = () => {
  const currentIndex = props.images.indexOf(currentImage.value)
  const prevIndex = currentIndex === 0 ? props.images.length - 1 : currentIndex - 1
  currentImage.value = props.images[prevIndex]
}
</script>

<style scoped>
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
