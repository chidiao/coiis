<template>
  <div class="container mx-auto">
    <div class="py-5">
      <div class="text-xl font-bold">Password</div>
      <div class="mt-2 text-sm text-gray-500 dark:text-zinc-400">
        Enter your current & new password to reset your password
      </div>
    </div>

    <form @submit.prevent="onSubmit">
      <AccountInputGroup label="Old password" :help="formErrors.old_password">
        <InputText
          v-model="formData.old_password"
          size="small"
          type="password"
          placeholder="Enter your old password"
          @input="validateField('old_password')"
        />
      </AccountInputGroup>

      <AccountInputGroup label="New password" :help="formErrors.password">
        <InputText
          v-model="formData.password"
          size="small"
          type="password"
          placeholder="Enter your new password"
          @input="validateField('password')"
        />
      </AccountInputGroup>

      <AccountInputGroup label="Confirm password" :help="formErrors.confirm">
        <InputText
          v-model="formData.confirm"
          size="small"
          type="password"
          placeholder="Confirm your new password"
          @input="validateField('confirm')"
        />
      </AccountInputGroup>

      <div class="py-8 w-full flex justify-end">
        <Button label="Reset password" type="submit" size="small" :loading="loading"></Button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { z } from 'zod'

const { userApi } = useApis()

const formData = ref({
  old_password: '',
  password: '',
  confirm: ''
})

const schema = z.object({
  old_password: z.string().min(8, 'Must be at least 8 characters'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  confirm: z.string().min(8, 'Must be at least 8 characters')
})

const formErrors = ref({})
const validateField = (field) => {
  try {
    schema.pick({ [field]: true }).parse({ [field]: formData.value[field] })
    formErrors.value[field] = null
    return true
  } catch (error) {
    formErrors.value[field] = error.errors[0].message
    return false
  }
}

const userStore = useUserStore()
const msg = useMsg()
const router = useRouter()
const loading = ref(false)
const onSubmit = async () => {
  try {
    schema.parse(formData.value)
    submit()
  } catch (error) {
    const errors = error.format()
    const keys = Object.keys(errors)
    keys.forEach((key) => (formErrors.value[key] = errors[key]._errors?.[0]))
  }
}

const submit = async () => {
  loading.value = true

  try {
    const { message } = await userApi.modifyPassword(formData.value)
    msg.error({ detail: message })
    userStore.logout()
    router.replace('/account/login')
  } finally {
    loading.value = false
  }
}
</script>
