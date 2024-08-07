<template>
  <a-menu
    mode="inline"
    class="size-full bg-transparent"
    style="border-inline-end: none"
    v-model:selectedKeys="selectedKeys"
  >
    <a-menu-item v-for="i in menus" :key="i.route" @click="router.push(i.route)">
      <component :is="i.icon" />
      <span>{{ i.label }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  HomeOutlined,
  StarOutlined,
  CheckSquareOutlined,
  DribbbleOutlined,
  SearchOutlined
} from '@ant-design/icons-vue'

const menus = [
  {
    route: '/',
    label: 'Home',
    icon: HomeOutlined
  },
  {
    route: '/workspace',
    label: 'Workspace',
    icon: StarOutlined
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
  },
  {
    route: '/search',
    label: 'Search',
    icon: SearchOutlined
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
