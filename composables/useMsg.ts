import { useToast } from 'primevue/usetoast'
import type { ToastMessageOptions } from 'primevue/toast'

export const useMsg = () => {
  const showToast = (params: ToastMessageOptions) => {
    const toast = useToast()
    toast.add(params)
  }

  return {
    success: (params: ToastMessageOptions) => showToast({ ...params, severity: 'success' }),
    info: (params: ToastMessageOptions) => showToast({ ...params, severity: 'info' }),
    warn: (params: ToastMessageOptions) => showToast({ ...params, severity: 'warn' }),
    error: (params: ToastMessageOptions) => showToast({ ...params, severity: 'error' })
  }
}
