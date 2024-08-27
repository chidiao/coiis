<template>
  <LoginBackground>
    <div>
      <div class="text-center">
        <LockButton class="size-10 mx-auto mb-5" />

        <div class="text-2xl text-gray-900 dark:text-white font-bold">Welcome back</div>
        <div class="text-gray-500 dark:text-gray-400 mt-1">
          Don't have an account?
          <RouterLink to="/account/signup" class="text-sky-500 font-medium">Sign up</RouterLink>.
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

        <div class="flex flex-col space-y-2 pt-5">
          <Button label="Continue" size="small" type="submit" block :loading="loading"></Button>

          <div class="flex justify-center items-center">
            <NuxtLink to="/account/forget">
              <Button size="small" link>Forget password</Button>
            </NuxtLink>
          </div>
        </div>
      </form>
    </div>
  </LoginBackground>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'empty'
})

import LockButton from '@/assets/svg/lock.svg'
import { z } from 'zod'
import type { LoginParams } from '@/types/user'

const router = useRouter()
const { userApi } = useApis()

const formErrors = ref({})
const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

const formData = ref<LoginParams>({
  email: '',
  password: ''
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

const userStore = useUserStore()

const loading = ref(false)
const onSubmit = async () => {
  try {
    schema.parse(formData.value)
    login()
  } catch (error) {
    const errors = error.format()
    const keys = Object.keys(errors)
    keys.forEach((key) => (formErrors.value[key] = errors[key]._errors?.[0]))
  }
}

const login = async () => {
  loading.value = true

  try {
    const { data } = await userApi.login(formData.value)
    userStore.setUserInfo(data)
    router.replace('/')
  } finally {
    loading.value = false
  }
}
</script>
