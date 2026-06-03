<template>
  <div class="bg-surface-container-high border border-paper-white/10 p-8">
    <h3 class="font-headline-lg text-headline-lg-mobile text-paper-white mb-8">Size Guide</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 class="font-body-md text-body-md text-paper-white mb-4 font-bold">Measurements (in inches)</h4>
        <table class="w-full">
          <thead>
            <tr class="border-b border-paper-white/10">
              <th class="text-left py-2 px-3 font-label-tag text-label-tag text-on-surface-variant uppercase">Size</th>
              <th class="text-left py-2 px-3 font-label-tag text-label-tag text-on-surface-variant uppercase">Chest</th>
              <th class="text-left py-2 px-3 font-label-tag text-label-tag text-on-surface-variant uppercase">Length</th>
              <th class="text-left py-2 px-3 font-label-tag text-label-tag text-on-surface-variant uppercase">Sleeve</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in sizeData" :key="row.size" class="border-b border-paper-white/5 hover:bg-surface-container-low transition-colors">
              <td class="py-3 px-3 font-label-mono text-label-mono text-paper-white">{{ row.size }}</td>
              <td class="py-3 px-3 font-label-mono text-label-mono text-on-surface/70">{{ row.chest }}</td>
              <td class="py-3 px-3 font-label-mono text-label-mono text-on-surface/70">{{ row.length }}</td>
              <td class="py-3 px-3 font-label-mono text-label-mono text-on-surface/70">{{ row.sleeve }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h4 class="font-body-md text-body-md text-paper-white mb-4 font-bold">How to Measure</h4>
        <ul class="space-y-4">
          <li v-for="instruction in instructions" :key="instruction.title" class="flex gap-3">
            <span class="material-symbols-outlined text-tobacco-amber flex-shrink-0 mt-0.5">done</span>
            <div>
              <p class="font-body-md text-body-md text-paper-white mb-1">{{ instruction.title }}</p>
              <p class="font-label-mono text-label-mono text-on-surface/60">{{ instruction.detail }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SizeRow {
  size: string
  chest: string
  length: string
  sleeve: string
}

interface Instruction {
  title: string
  detail: string
}

const props = defineProps<{
  sizeData: SizeRow[]
  instructions: Instruction[]
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
