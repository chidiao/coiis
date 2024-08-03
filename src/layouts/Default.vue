<template>
  <a-layout>
    <Header />

    <a-layout>
      <a-layout-sider width="240" class="bg-white fixed left-0 top-16" style="height: calc(100vh - 64px)">
        <Menu />
      </a-layout-sider>

      <a-layout>
        <div class="h-16"></div>

        <a-layout-content class="bg-white p-5 ml-[240px]" style="min-height: calc(100vh - 104px)">
          <div class="w-full max-w-5xl mx-auto">
            <RouterView />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
</script>

<style scoped>
.ant-layout-header,
.ant-layout-sider {
  background: #fff;
  position: fixed;
}
.ant-menu {
  font-size: 12px;
}
</style>
