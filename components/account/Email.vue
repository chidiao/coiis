<template>
  <div class="container mx-auto">
    <div class="py-5">
      <div class="text-xl font-bold">Email</div>
      <div class="mt-2 text-sm text-gray-500 dark:text-zinc-400">
        Enter your new email & password to reset your email
      </div>
    </div>

    <UForm :schema="schema" :state="state" class="w-full" @submit="onSubmit">
      <AccountFormGroup
        label="New email"
        name="email"
        description="Used to sign in, for email receipts and product updates."
      >
        <UInput v-model="state.email" type="password" placeholder="Enter your new email" />
      </AccountFormGroup>

      <AccountFormGroup label="Verification code" name="verification_code">
        <div class="flex justify-between items-center space-x-4">
          <UInput class="w-2/3" v-model="state.verification_code" placeholder="Enter your verification code" />
          <UButton class="w-1/3 justify-center" size="sm" @click="sendCode">
            {{ countDown.countStr }}
          </UButton>
        </div>
      </AccountFormGroup>

      <AccountFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" placeholder="Enter your password" />
      </AccountFormGroup>

      <div class="py-8 w-full flex justify-end">
        <UButton type="submit" size="sm" :loading="loading">Reset email</UButton>
      </div>
    </UForm>
  </div>
</template>

<script setup>
import { z } from 'zod'

const countDown = useCountDown()
const sendCode = async () => {
  try {
    emailSchema.parse(state.value.email)
  } catch (e) {
    const msg = JSON.parse(e)[0].message
    toast.add({ title: msg })
    return
  }

  if (countDown.counting.value) return

  countDown.start()
  const { data } = await userApi.sendCode(state.value.email)

  if (data?.pkey) {
    state.value.pkey = data.pkey
  } else {
    countDown.end()
  }
}

const { userApi } = useApis()

const emailSchema = z.string().email('Invalid email')
const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string(),
  verification_code: z.string()
})

const state = ref({
  email: '',
  password: '',
  verification_code: '',
  pkey: ''
})

const userStore = useUserStore()
const toast = useToast()
const router = useRouter()
const loading = ref(false)
const onSubmit = async () => {
  loading.value = true

  try {
    const { message } = await userApi.putEmail(state.value)
    toast.add({ title: message })
    userStore.getUserInfo()
  } finally {
    loading.value = false
  }
}
</script>
