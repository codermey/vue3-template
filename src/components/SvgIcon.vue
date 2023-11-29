<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
interface IProps {
  prefix?: string
  name: string
  color?: string
}

const props = withDefaults(defineProps<IProps>(), {
  prefix: 'icon',
  color: '#333'
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style scoped></style>
