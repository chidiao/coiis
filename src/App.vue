<template>
  <a-config-provider :theme>
    <div class="font-sans">
      <RouterView />
    </div>
  </a-config-provider>
</template>

<script setup>
import DefaultLayout from '@/layouts/Default.vue'
const theme = {
  token: {
    fontSize: 12
  }
}
</script>
