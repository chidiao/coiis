import type { Ref } from 'vue'

export const useZod = (formData: Ref, schema: any) => {
  const formErrors = ref<any>({})

  const validateField = (field: string) => {
    try {
      schema.pick({ [field]: true }).parse({ [field]: formData.value[field] })
      formErrors.value[field] = null
      return true
    } catch (error: any) {
      console.log(error)
      formErrors.value[field] = error.errors[0].message
      return false
    }
  }

  return {
    validateField,
    formErrors
  }
}
