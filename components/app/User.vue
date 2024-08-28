<template>
  <div class="flex justify-center items-center">
    <MyAvatar @click="(e) => menu.toggle(e)" />

    <TieredMenu ref="menu" :model="items" popup>
      <template #item="{ item }">
        <NuxtLink :to="item.route" @click="() => item.click?.()">
          <div class="py-2 px-3 flex gap-2 items-center">
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </div>
        </NuxtLink>
      </template>
    </TieredMenu>
  </div>
</template>

<script lang="tsx" setup>
const userStore = useUserStore()
const menu = ref()
const items = [
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    route: '/account/settings'
  },
  {
    label: 'Logout',
    icon: 'pi pi-sign-out',
    click: () => {
      userStore.logout()
    }
  }
]

const MyAvatar = () => (
  <Avatar
    class="cursor-pointer"
    image={userStore.userInfo?.user_info?.avatar_url}
    alt={userStore.userInfo?.email ?? '...'}
    shape="circle"
  />
)
</script>
