<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <h1 class="green">{{ msg }}</h1>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>
