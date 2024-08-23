import type { LoginData } from '@/types/user'
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  const userInfo = useStorage<LoginData>('userInfo', {})
  const isLogin = computed(() => userInfo.value?.token !== undefined)

  const loading = ref(false)
  const getUserInfo = async () => {
    loading.value = true
    const { userApi } = useApis()
    const { data } = await userApi.getUserInfo()
    loading.value = false

    setUserInfo(data)
  }

  const setUserInfo = (data?: LoginData) => {
    userInfo.value = data
  }

  const logout = () => {
    setUserInfo({})
  }

  return {
    userInfo,
    isLogin,
    loading,
    getUserInfo,
    setUserInfo,
    logout
  }
})
