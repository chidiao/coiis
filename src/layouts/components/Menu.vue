<template>
  <a-layout-sider width="200" class="bg-white fixed left-0 top-16" style="height: calc(100vh - 64px)">
    <a-menu mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item v-for="i in menus" :key="i.route" @click="router.push(i.route)">
        <component :is="i.icon" />
        <span>{{ i.label }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { HomeOutlined, CheckSquareOutlined, DribbbleOutlined } from '@ant-design/icons-vue'

const menus = [
  {
    route: '/',
    label: 'Home',
    icon: HomeOutlined
  },
  {
    route: '/collections',
    label: 'Collections',
    icon: CheckSquareOutlined
  },
  {
    route: '/categories',
    label: 'Categories',
    icon: DribbbleOutlined
  }
]
const selectedKeys = ref<string[]>([])

const router = useRouter()
const route = useRoute()

watch(
  () => route.path,
  (path) => {
    selectedKeys.value = [path]
  },
  { immediate: true }
)
</script>
