<template>
  <div class="home">
    <h1>This is an home page</h1>
  </div>
</template>

<script setup lang="ts">
// 重定向方案二
// import { useRouter } from 'vue-router'

// const router = useRouter()
// router.push('/')
</script>

<style scoped lang="scss"></style>

<!-- 重定向方案三 -->
<!-- <route>
{
  name: "home",
  redirect:"/"
}
</route> -->

<!-- 重定向方案四 -->
<!-- <route lang="yaml">
name: home
redirect:
  path: /
</route> -->
