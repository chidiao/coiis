interface ResType<T> {
  code?: number
  message?: string
  data?: T
}

const BASE_URL = 'https://api.coiis.com'

export default defineNuxtPlugin((nuxtApp) => {
  const http = $fetch.create({
    baseURL: BASE_URL,
    onResponse: ({ response }) => {
      if (response._data?.code === 0) {
        return response._data
      } else {
        const toast = useToast()
        toast.add({ title: response._data?.message, icon: 'i-heroicons:x-circle' })
        throw new Error(response._data?.message)
      }
    }
  })

  return {
    provide: {
      http: {
        get: <T>(url: string, opts?: any): Promise<ResType<T>> => http(url, { method: 'GET', ...opts }),
        post: <T>(url: string, data?: any, opts?: any): Promise<ResType<T>> =>
          http(url, { method: 'POST', body: data, ...opts }),
        put: <T>(url: string, data?: any, opts?: any): Promise<ResType<T>> =>
          http(url, { method: 'PUT', body: data, ...opts }),
        delete: <T>(url: string, data?: any, opts?: any): Promise<ResType<T>> =>
          http(url, { method: 'DELETE', body: data, ...opts })
      }
    }
  }
})
