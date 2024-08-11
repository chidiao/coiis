import type { UseFetchOptions } from '#app'

interface ResType<T> {
  code?: number
  message?: string
  data?: T
}

const BASE_URL = 'https://api.coiis.com/yaco-web'

export default defineNuxtPlugin((nuxtApp) => {
  const http = $fetch.create({
    baseURL: BASE_URL
  })

  return {
    provide: {
      http: {
        get: <T>(url: string, opts?: any): Promise<ResType<T>> => http(url, { method: 'GET', ...opts }),
        post: <T>(url: string, data?: any, opts?: any): Promise<ResType<T>> =>
          http(url, { method: 'POST', body: data, ...opts })
      }
    }
  }
})
