<template>
  <header
    class="w-full h-16 bg-white dark:bg-[#212121] fixed left-0 top-0 z-50 border-b border-gray-200 dark:border-gray-700"
  >
    <div class="container h-full mx-auto px-5 xl:px-0">
      <div class="size-full flex justify-between items-center">
        <Logo class="w-16 shrink-0 cursor-pointer" @click="showLeft = true" />

        <AppDrawerMenu v-model="showLeft" />

        <AppUser v-if="userStore.isLogin" />

        <AppLogin v-else />
      </div>
    </div>
  </header>
</template>

<script lang="tsx" setup>
import LogoLight from '@/assets/svg/logo.svg'
import LogoDark from '@/assets/svg/logo-dark.svg'
import { MenuOutlined } from '@ant-design/icons-vue'

const colorMode = useColorMode()

const Logo = () => {
  return colorMode.value == 'dark' ? <LogoDark /> : <LogoLight />
}

const showLeft = ref<boolean>(false)

const userStore = useUserStore()
</script>
