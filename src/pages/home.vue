<template>
  <h1>hello world</h1>
  <div class="home">This is the home page</div>
  <div class="m-4">Hello</div>

  <div class="container mx-auto px-4">Hello TailwindCSS</div>

  <div class="text-blue-500">{{ msg }}</div>

  <p>x:{{ x }} y:{{ y }}</p>
  <p>sourceType:{{ sourceType }}</p>

  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" @click-button="(val) => console.log(val)" />
  <Children msg="This is an children component" />

  <!-- A basic anchor icon from Phosphor icons -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- An orange alarm from Material Design Icons -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- A large Vue logo -->
  <div class="i-logos-vue text-3xl" />
  <!-- Sun in light mode, Moon in dark mode, from Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji of laugh, turns to tear on hovering -->
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
</template>

<script setup lang="ts">
const msg = ref('my name is codermey')

const { x, y, sourceType } = useMouse()
</script>

<style scoped></style>
