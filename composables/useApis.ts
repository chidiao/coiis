import type { ApplicationCategory } from '@/types/application'
import type { RegisterParams, RegisterData, LoginParams, LoginData, UserInfoParams } from '@/types/user'
import type { OrganizationList, Organization, OrganizationDetail } from '~/types/organization'

export const useApis = () => {
  const { $http } = useNuxtApp()

  return {
    userApi: {
      sendCode: (email: string) => $http.post<{ pkey: string }>('/yac-user/v1/user/verification-code/send', { email }),
      sendCodeResetPassword: (email: string) =>
        $http.post<{ pkey: string }>('/yac-user/v1/user/password-reset/email', { email }),
      register: (params: RegisterParams) => $http.post<RegisterData>('/yac-user/v1/user/register', params),
      resetPassword: (params: RegisterParams) => $http.post<RegisterData>('/yac-user/v1/user/password/reset', params),
      modifyPassword: (params: { old_password: string; password: string }) =>
        $http.put('/yac-user/v1/user/password', params),
      login: (params: LoginParams) => $http.post<LoginData>('/yac-user/v1/user/login', params),
      getUserInfo: () => $http.get<LoginData>('/yac-user/v1/user'),
      putUserInfo: (params: UserInfoParams) => $http.put('/yac-user/v1/user/info', params)
    },
    organizationApi: {
      getStarList: () => $http.get<Array<Organization>>('/yaco-web/v1/organization/star-suppliers'),
      getList: (params: { page: number }) => {
        const { page } = params
        return $http.get<OrganizationList>(`/yaco-web/v1/organization/query?page=${page}&page_size=10`)
      },
      getDetail: (id: string) => $http.get<OrganizationDetail>(`/yaco-web/v1/organization/${id}`)
    },
    applicationApi: {
      getCategoryList: () => $http.get<Array<ApplicationCategory>>('/yaco-web/v1/application-category/list'),
      getGroupList: () => $http.get('/yaco-web/v1/application/api/groups')
    }
  }
}
