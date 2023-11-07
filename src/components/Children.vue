<script setup lang="ts">
const modelValue = defineModel<number>({ required: true })

const handleClick = () => {
  modelValue.value++
}
</script>

<template>
  <div class="children">
    <h1>Children Component</h1>
    <p>{{ modelValue }}</p>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<style scoped></style>
