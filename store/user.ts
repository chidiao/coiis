import type { LoginData } from '@/types/user'
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const userInfo = useStorage<LoginData | null>('userInfo', null)

  const setUserInfo = (data?: LoginData) => {
    userInfo.value = data
  }

  return {
    userInfo,
    setUserInfo
  }
})
