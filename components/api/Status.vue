<template>
  <div class="flex flex-col items-start w-36 md:w-40 rounded-lg border dark:border-gray-700 shadow-sm p-3">
    <div class="w-full flex justify-between items-center text-xs dark:text-white">
      <div>{{ title }}</div>

      <ExclamationCircleOutlined />
    </div>

    <div class="text-lg font-bold mt-3 dark:text-white">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
</script>
