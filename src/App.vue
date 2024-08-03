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

<style>
@font-face {
  font-family: 'Inter';
  src: url('@/assets/font/inter.woff2') format('woff2');
}

.font-sans {
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
}

::-webkit-scrollbar {
  background-color: transparent;
  border: 0;
  width: 8px;
}
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  width: 8px;
  background-color: #f1f1f1;
}
::-webkit-scrollbar-track {
  border-radius: 8px;
  width: 8px;
  background-color: transparent;
}
</style>
