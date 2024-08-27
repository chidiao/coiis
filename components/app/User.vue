<template>
  <div class="flex justify-center items-center">
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <MyAvatar />

      <template #account>
        <div class="flex items-center mb-px">
          <MyAvatar />

          <div>{{ userStore.userInfo?.nickname ?? userStore.userInfo?.email ?? '...' }}</div>
        </div>
      </template>
    </UDropdown>
  </div>
</template>

<script lang="tsx" setup>
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

const MyAvatar = () => (
  <Avatar image={userStore.userInfo?.user_info?.avatar_url} alt={userStore.userInfo?.email ?? '...'} shape="circle" />
)
</script>
