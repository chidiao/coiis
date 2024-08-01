<template>
  <a-layout>
    <Header />

    <a-layout class="pt-16">
      <RouterView />
    </a-layout>
  </a-layout>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style scoped>
.ant-layout-header,
.ant-layout-sider {
  background: #fff;
  position: fixed;
}
</style>
