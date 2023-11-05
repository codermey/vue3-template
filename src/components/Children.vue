<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="children">
    <h1>Children Component</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<style scoped></style>
