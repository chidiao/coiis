import type { ApplicationCategory } from '@/types/application'

export const useApi = () => {
  const { $http } = useNuxtApp()

  return {
    applicationApi: {
      getCategoryList: () => $http.get<Array<ApplicationCategory>>('/v1/application-category/list')
    }
  }
}
