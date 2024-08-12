<template>
  <div class="w-full">
    <a-menu
      mode="inline"
      class="w-full bg-transparent"
      style="border-inline-end: none"
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item v-for="i in menu" :key="i.route" @click="router.push(i.route)">
        <component :is="i.icon" />
        <span>{{ i.label }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { menu } from './config'

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
