import type { ApplicationCategory } from '@/types/application'
import type { RegisterParams, RegisterData, LoginParams, LoginData } from '@/types/user'

export const useApi = () => {
  const { $http } = useNuxtApp()

  return {
    userApi: {
      sendCode: (email: string) => $http.post('/yac-user/v1/user/verification-code/send', { email }),
      sendCodeResetPassword: (email: string) => $http.post('/yac-user/v1/user/password-reset/email', { email }),
      register: (params: RegisterParams) => $http.post<RegisterData>('/yac-user/v1/user/register', params),
      login: (params: LoginParams) => $http.post<LoginData>('/yac-user/v1/user/login', params)
    },
    applicationApi: {
      getCategoryList: () => $http.get<Array<ApplicationCategory>>('/yaco-web/v1/application-category/list')
    }
  }
}
