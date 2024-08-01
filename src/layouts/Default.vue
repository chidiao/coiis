<template>
  <a-layout>
    <Header />

    <a-layout>
      <Menu />

      <a-layout class="p-5">
        <div class="h-16"></div>

        <a-layout-content class="bg-white p-5 ml-[200px]" style="min-height: calc(100vh - 104px)">
          <slot></slot>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Header from './Header.vue'
import Menu from './Menu.vue'
</script>

<style scoped>
.ant-layout-header,
.ant-layout-sider {
  background: #fff;
  position: fixed;
}
</style>
