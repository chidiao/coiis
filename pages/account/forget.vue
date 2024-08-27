<template>
  <LoginBackground>
    <div>
      <div class="text-center">
        <div class="text-2xl text-gray-900 dark:text-white font-bold">Forget password</div>
        <div class="text-gray-500 dark:text-gray-400 mt-1">
          Already have an account?
          <RouterLink to="/account/login" class="text-sky-500 font-medium">Login</RouterLink>.
        </div>
      </div>

      <form class="flex flex-col py-8 gap-5 text-sm" @submit.prevent="onSubmit">
        <div class="flex flex-col gap-2">
          <label for="email">Email</label>
          <InputText
            placeholder="Enter your email"
            v-model="formData.email"
            size="small"
            type="text"
            @input="validateField('email')"
          />
          <small>{{ formErrors.email }}</small>
        </div>

        <div class="flex flex-col gap-2">
          <label for="verification_code">Verification code</label>
          <div class="flex justify-between items-center space-x-4">
            <InputText
              placeholder="Enter your verification code"
              v-model="formData.verification_code"
              size="small"
              type="text"
              @input="validateField('verification_code')"
            />
            <Button class="w-1/3 justify-center" size="small" @click="onSend">
              {{ countDown.countStr }}
            </Button>
          </div>
          <small>{{ formErrors.verification_code }}</small>
        </div>

        <div class="flex flex-col gap-2">
          <label for="password">Password</label>
          <InputText
            placeholder="Enter your password"
            v-model="formData.password"
            size="small"
            type="password"
            @input="validateField('password')"
          />
          <small v-if="formErrors.password">{{ formErrors.password }}</small>
        </div>

        <div class="flex flex-col pt-5">
          <Button label="Reset password" type="submit" size="small" block :loading></Button>
        </div>
      </form>
    </div>
  </LoginBackground>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'empty'
})

import { z } from 'zod'

const { userApi } = useApis()

const formErrors = ref({})
const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  verification_code: z.string().min(6, 'Invalid code'),
  pkey: z.string()
})

const formData = ref({
  email: '',
  password: '',
  verification_code: '',
  pkey: ''
})

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
const countDown = useCountDown()
const onSend = () => {
  if (!validateField('email')) return

  sendCode()
}
const sendCode = async () => {
  if (!formData.value.email) return
  if (countDown.counting.value) return

  countDown.start()
  const { data } = await userApi.sendCodeResetPassword(formData.value.email)

  if (data?.pkey) {
    formData.value.pkey = data.pkey
  } else {
    countDown.end()
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
    const { message } = await userApi.resetPassword(formData.value)
    msg.success({ detail: message })
    router.replace('/account/login')
  } finally {
    loading.value = false
  }
}
</script>
