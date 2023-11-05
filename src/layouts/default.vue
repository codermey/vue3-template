<template>
  <header>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/userprofile">我的</router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
