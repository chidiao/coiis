<template>
  <div class="container mx-auto">
    <div class="py-5">
      <div class="text-xl font-bold">Password</div>
      <div class="mt-2 text-sm text-gray-500 dark:text-zinc-400">
        Enter your current new password to reset your password
      </div>
    </div>

    <UForm :schema="schema" :state="state" class="w-full max-w-sm my-5 space-y-5" @submit="onSubmit">
      <UFormGroup label="Old password" name="old_password">
        <UInput v-model="state.old_password" type="password" placeholder="Enter your old password" />
      </UFormGroup>

      <UFormGroup label="New password" name="password">
        <UInput v-model="state.password" type="password" placeholder="Enter your new password" />
      </UFormGroup>

      <UFormGroup label="Confirm password" name="confirm">
        <UInput v-model="state.confirm" type="password" placeholder="Confirm your new password" />
      </UFormGroup>

      <div class="pt-5">
        <UButton type="submit" size="sm" :loading="loading">Update password</UButton>
      </div>
    </UForm>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'account'
})

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
const toast = useToast()
const router = useRouter()
const loading = ref(false)
const onSubmit = async () => {
  loading.value = true

  try {
    const { message } = await userApi.modifyPassword(state.value)
    toast.add({ title: message })
    userStore.logout()
    router.replace('/account/login')
  } finally {
    loading.value = false
  }
}
</script>
