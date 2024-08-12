<template>
  <div>
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <UAvatar :alt="userStore.userInfo?.email ?? '...'" size="sm" />
    </UDropdown>
  </div>
</template>

<script setup>
const userStore = useUserStore()
const items = [
  [
    {
      label: userStore.userInfo?.email ?? '...',
      avatar: {
        alt: userStore.userInfo?.email ?? '...'
      }
    }
  ],
  [
    {
      label: 'Logout',
      icon: 'i-heroicons-arrow-right-end-on-rectangle',
      click: () => {
        userStore.logout()
      }
    }
  ]
]
</script>
