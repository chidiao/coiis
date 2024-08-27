import { useToast } from 'primevue/usetoast'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      msg: useToast()
    }
  }
})
