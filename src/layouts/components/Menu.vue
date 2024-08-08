<template>
  <div class="size-full">
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

    <div class="p-3">
      <div class="border-y dark:border-gray-700 py-3">
        <div
          class="w-full flex justify-between items-center text-xs hover:bg-sky-200/20 p-2 rounded transition duration-300 cursor-pointer"
        >
          <div>Switch to {{ darkMode ? 'Light' : 'Dark' }} View</div>
          <a-switch v-model:checked="darkMode"></a-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import menu from './menu.ts'
import { useStorage } from '@vueuse/core'

const darkMode = useStorage('darkMode', false)

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
