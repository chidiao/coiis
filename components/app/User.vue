<template>
  <div class="flex justify-center items-center">
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <UAvatar :src="userStore.userInfo?.user_info?.avatar_url" :alt="userStore.userInfo?.email ?? '...'" size="sm" />

      <template #account>
        <div class="flex items-center mb-px">
          <UAvatar
            :src="userStore.userInfo?.user_info?.avatar_url"
            :alt="userStore.userInfo?.email ?? '...'"
            size="sm"
          />

          <div>{{ userStore.userInfo?.nickname ?? userStore.userInfo?.email ?? '...' }}</div>
        </div>
      </template>
    </UDropdown>
  </div>
</template>

<script setup>
const userStore = useUserStore()
const items = [
  [
    {
      slot: 'account'
    }
  ],
  [
    {
      label: 'Settings',
      icon: 'i-feather-settings',
      to: '/account/settings'
    },
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
