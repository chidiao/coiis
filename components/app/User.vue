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
    },
    {
      label: 'Settings',
      icon: 'i-feather-settings',
      to: '/account/settings'
    }
  ],
  [
    {
      label: 'Logout',
      icon: 'i-feather-log-out',
      click: () => {
        userStore.logout()
      }
    }
  ]
]
</script>
