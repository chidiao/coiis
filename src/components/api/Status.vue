<template>
  <div class="flex flex-col items-start w-40 rounded-lg border shadow-sm p-3">
    <div class="w-full flex justify-between items-center">
      <div>{{ title }}</div>

      <ExclamationCircleOutlined />
    </div>

    <div class="text-lg font-bold mt-3">
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
