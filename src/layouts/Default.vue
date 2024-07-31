<template>
  <a-layout>
    <a-layout-header class="fixed w-full z-50 border-b border-solid border-gray-200">
      <div class="size-full">header</div>
    </a-layout-header>

    <a-layout>
      <a-layout-sider width="200" class="bg-white fixed left-0 top-16" style="height: calc(100vh - 64px)">
        <a-menu mode="inline">
          <a-menu-item v-for="i in menus" :key="i.label" @click="router.push(i.route)">
            <component :is="i.icon" />
            <span>{{ i.label }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout class="p-5">
        <div class="h-16"></div>

        <a-layout-content class="bg-white p-4 ml-[200px]">
          <slot></slot>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { CheckSquareOutlined } from '@ant-design/icons-vue'

const menus = [
  {
    route: '/collections',
    label: 'Collections',
    icon: CheckSquareOutlined
  }
]

const router = useRouter()
</script>

<style scoped>
.ant-layout-header,
.ant-layout-sider {
  background: #fff;
  position: fixed;
}
</style>
