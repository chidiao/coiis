<template>
  <div class="container mx-auto">
    <div class="py-5">
      <div class="text-xl font-bold">Password</div>
      <div class="mt-2 text-sm text-gray-500 dark:text-zinc-400">
        Enter your current & new password to reset your password
      </div>
    </div>

    <UForm :schema="schema" :state="state" class="w-full" @submit="onSubmit">
      <AccountFormGroup label="Old password" name="old_password">
        <UInput v-model="state.old_password" type="password" placeholder="Enter your old password" />
      </AccountFormGroup>

      <AccountFormGroup label="New password" name="password">
        <UInput v-model="state.password" type="password" placeholder="Enter your new password" />
      </AccountFormGroup>

      <AccountFormGroup label="Confirm password" name="confirm">
        <UInput v-model="state.confirm" type="password" placeholder="Confirm your new password" />
      </AccountFormGroup>

      <div class="py-8 w-full flex justify-end">
        <UButton type="submit" size="sm" :loading="loading">Reset password</UButton>
      </div>
    </UForm>
  </div>
</template>

<script setup>
import { z } from 'zod'

const { userApi } = useApis()

const schema = z
  .object({
    old_password: z.string().min(8, 'Must be at least 8 characters'),
    password: z.string().min(8, 'Must be at least 8 characters'),
    confirm: z.string().min(8, 'Must be at least 8 characters')
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm']
  })

const state = ref({
  old_password: '',
  password: '',
  confirm: ''
})

const userStore = useUserStore()
const msg = useMsg()
const router = useRouter()
const loading = ref(false)
const onSubmit = async () => {
  loading.value = true

  try {
    const { message } = await userApi.modifyPassword(state.value)
    msg.error({ detail: message })
    userStore.logout()
    router.replace('/account/login')
  } finally {
    loading.value = false
  }
}
</script>
