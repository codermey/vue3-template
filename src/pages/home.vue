<template>
  <h1>hello world</h1>
  <div class="home">This is the home page</div>
  <div class="m-4">Hello</div>

  <div class="container mx-auto px-4">Hello TailwindCSS</div>

  <div class="text-blue-500">{{ msg }}</div>

  <p>x:{{ x }} y:{{ y }}</p>
  <p>sourceType:{{ sourceType }}</p>

  <HelloWorld />
</template>

<script setup lang="ts">
const msg = ref('my name is codermey')

const { x, y, sourceType } = useMouse()
</script>

<style scoped></style>
