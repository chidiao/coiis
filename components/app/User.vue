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
      label: userStore.userInfo?.nickname ?? userStore.userInfo?.email ?? '...',
      avatar: {
        src: userStore.userInfo?.user_info?.avatar_url
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
