<template>
  <header
    class="w-full h-16 backdrop-blur bg-white/80 dark:bg-[#212121]/80 fixed left-0 top-0 z-50 border-b border-gray-200 dark:border-gray-700"
  >
    <div class="container h-full mx-auto px-5 xl:px-0">
      <div class="size-full flex justify-between items-center">
        <AppLogo class="w-16 shrink-0 cursor-pointer xl:hidden" @click="showSlideMenu = !showSlideMenu" />
        <AppLogo class="w-16 shrink-0 cursor-pointer hidden xl:flex" @click="router.push('/app')" />

        <div class="flex items-center space-x-3">
          <AppDarkToggle />

          <AppUser v-if="userStore.isLogin" />

          <AppLogin v-else />
        </div>
      </div>

      <AppSlideMenu v-model="showSlideMenu" />
    </div>
  </header>
</template>

<script lang="tsx" setup>
const colorMode = useColorMode()

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const showSlideMenu = ref(false)
watch(
  () => route.path,
  (path) => {
    showSlideMenu.value = false
  },
  { immediate: true }
)
</script>
