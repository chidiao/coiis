<template>
  <header
    class="w-full h-16 backdrop-blur bg-white/80 dark:bg-[#212121]/80 fixed left-0 top-0 z-50 border-b border-gray-200 dark:border-gray-700"
  >
    <div class="container h-full mx-auto px-5 xl:px-0">
      <div class="size-full flex justify-between items-center">
        <Logo class="w-16 shrink-0 cursor-pointer" @click="router.push('/app')" />

        <div class="flex items-center space-x-3">
          <AppDarkToggle />

          <AppUser v-if="userStore.isLogin" />

          <AppLogin v-else />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="tsx" setup>
import LogoLight from '@/assets/svg/logo.svg'
import LogoDark from '@/assets/svg/logo-dark.svg'

const colorMode = useColorMode()

const Logo = () => {
  return colorMode.value == 'dark' ? <LogoDark /> : <LogoLight />
}

const userStore = useUserStore()
const router = useRouter()
</script>
