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

      <UForm :schema="schema" :state="state" class="space-y-5 py-8" @submit="login">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" placeholder="Enter your email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" placeholder="Enter your password" />
        </UFormGroup>

        <div class="flex flex-col space-y-2 pt-5">
          <Button size="small" type="submit" block :loading="loading">Continue</Button>

          <div class="flex justify-center items-center">
            <NuxtLink to="/account/forget">
              <Button size="small" link>Forget password</Button>
            </NuxtLink>
          </div>
        </div>
      </UForm>
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

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

const state = ref<LoginParams>({
  email: '',
  password: ''
})

const userStore = useUserStore()

const loading = ref(false)
const login = async () => {
  loading.value = true

  try {
    const { data } = await userApi.login(state.value)
    userStore.setUserInfo(data)
    router.replace('/')
  } finally {
    loading.value = false
  }
}
</script>
