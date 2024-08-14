<template>
  <LoginBackground>
    <div>
      <div class="text-center">
        <div class="text-2xl text-gray-900 dark:text-white font-bold">Modify password</div>
        <div class="text-gray-500 dark:text-gray-400 mt-1">
          Don't want to modify it?
          <RouterLink to="/account/login" class="text-sky-500 font-medium">Login</RouterLink>.
        </div>
      </div>

      <UForm :schema="schema" :state="state" class="space-y-5 py-8" @submit="onSubmit">
        <UFormGroup label="Old password" name="old_password">
          <UInput v-model="state.old_password" type="password" placeholder="Enter your old password" />
        </UFormGroup>

        <UFormGroup label="New password" name="password">
          <UInput v-model="state.password" type="password" placeholder="Enter your new password" />
        </UFormGroup>

        <div class="pt-5">
          <UButton class="rounded-full" size="md" type="submit" block :loading="loading">Modify password</UButton>
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

const { userApi } = useApis()

const schema = z.object({
  old_password: z.string().min(8, 'Must be at least 8 characters'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

const state = ref({
  old_password: '',
  password: ''
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
