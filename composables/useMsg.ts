import { useToast } from 'primevue/usetoast'
import type { ToastMessageOptions } from 'primevue/toast'

export const useMsg = () => {
  const showToast = (params: ToastMessageOptions) => {
    const { life = 3000 } = params
    const toast = useToast()
    toast.add({ ...params, life })
  }

  return {
    success: (params: ToastMessageOptions) => showToast({ ...params, severity: 'success' }),
    info: (params: ToastMessageOptions) => showToast({ ...params, severity: 'info' }),
    warn: (params: ToastMessageOptions) => showToast({ ...params, severity: 'warn' }),
    error: (params: ToastMessageOptions) => showToast({ ...params, severity: 'error' })
  }
}
