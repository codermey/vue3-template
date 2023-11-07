<template>
  <h1>This is an home page</h1>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'

// test pwa
onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW: (_url, registration) => {
      setInterval(() => {
        registration?.update()
      }, 86400)
    }
  })
})
</script>

<style scoped></style>
