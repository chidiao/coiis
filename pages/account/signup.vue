<template>
  <LoginBackground>
    <div>
      <div class="text-center">
        <div class="text-2xl text-gray-900 dark:text-white font-bold">Create an account</div>
        <div class="text-gray-500 dark:text-gray-400 mt-1">
          Already have an account?
          <RouterLink to="/account/login" class="text-sky-500 font-medium">Login</RouterLink>.
        </div>
      </div>

      <UForm :schema="schema" :state="state" class="space-y-5 py-8" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" placeholder="Enter your email" />
        </UFormGroup>

        <UFormGroup label="Verification code" name="verification_code">
          <div class="flex justify-between items-center space-x-4">
            <UInput class="w-2/3" v-model="state.verification_code" placeholder="Enter your verification code" />
            <UButton class="w-1/3 justify-center" @click="sendCode">
              {{ countDown.countStr }}
            </UButton>
          </div>
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" placeholder="Enter your password" />
        </UFormGroup>

        <UFormGroup label="Pkey" name="pkey">
          <UInput v-model="state.pkey" placeholder="Enter your pkey" readonly />
        </UFormGroup>

        <div class="pt-5">
          <UButton class="rounded-full" size="md" type="submit" block :loading="loading">Create account</UButton>
        </div>
      </UForm>
    </div>
  </LoginBackground>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'empty'
})

import { z } from 'zod'

const { userApi } = useApi()

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  verification_code: z.string().min(6, 'Invalid code'),
  pkey: z.string()
})

const state = ref({
  email: '',
  password: '',
  verification_code: '',
  pkey: ''
})

const countDown = useCountDown()
const sendCode = async () => {
  if (!state.value.email) return
  if (countDown.counting.value) return

  countDown.start()
  const { data } = await userApi.sendCode(state.value.email)

  if (data?.pkey) {
    state.value.pkey = data.pkey
  } else {
    countDown.end()
  }
}

const toast = useToast()
const router = useRouter()
const loading = ref(false)
const onSubmit = async () => {
  loading.value = true
  const { message } = await userApi.resetPassword(state.value)
  loading.value = false
  toast.add({ title: message })
  router.replace('/account/login')

  try {
    const { message } = await userApi.resetPassword(state.value)
    toast.add({ title: message })
    router.replace('/account/login')
  } finally {
    loading.value = false
  }
}
</script>
