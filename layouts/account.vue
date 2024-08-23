<template>
  <DefaultLayout>
    <div>
      <UHorizontalNavigation
        :links="links"
        :ui="{ base: 'gap-3 mx-3' }"
        class="border-b border-gray-200 dark:border-gray-800"
      />
      <slot />
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/default.vue'

const links = [
  {
    label: 'Profile',
    icon: 'i-heroicons-identification',
    to: '/account/settings'
  },
  {
    label: 'Security',
    icon: 'i-heroicons-finger-print',
    to: '/account/password'
  }
]
</script>
