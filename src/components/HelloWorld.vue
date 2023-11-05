<script setup lang="ts">
const { msg } = defineProps<{
  msg: string
}>()

const emits = defineEmits<{ clickButton: [val: string] }>()

console.log('🚀 ~ file: HelloWorld.vue:3 ~ msg:', msg)
</script>

<template>
  <h1 class="green">{{ msg }}</h1>
  <button @click="emits('clickButton', '点击了button')">点击</button>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>
