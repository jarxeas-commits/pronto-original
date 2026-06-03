<template>
  <form @submit.prevent="submit" class="w-full max-w-xs">
    <Input 
      v-model="email"
      type="email"
      placeholder="EMAIL ADDRESS"
      label="Subscribe to our newsletter"
      class="mb-4"
    />
    <Button variant="primary" class="w-full">
      Subscribe
    </Button>
    <p class="font-label-mono text-label-mono text-on-surface/40 text-xs mt-4">
      We'll only email you about new drops and exclusive content. Unsubscribe anytime.
    </p>
  </form>
</template>

<script setup lang="ts">
const email = ref('')

const emit = defineEmits<{
  'subscribe': [email: string]
}>()

const submit = () => {
  if (email.value) {
    emit('subscribe', email.value)
    email.value = ''
  }
}
</script>
