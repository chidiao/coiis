import type { LoginData } from '@/types/user'
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const userInfo = useStorage<LoginData>('userInfo', {})
  const isLogin = computed(() => userInfo.value?.token !== undefined)

  const setUserInfo = (data?: LoginData) => {
    userInfo.value = data
  }

  const logout = () => {
    setUserInfo({})
  }

  return {
    userInfo,
    isLogin,
    setUserInfo,
    logout
  }
})
