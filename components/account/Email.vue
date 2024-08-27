<template>
  <div class="container mx-auto">
    <div class="py-5">
      <div class="text-xl font-bold">Email</div>
      <div class="mt-2 text-sm text-gray-500 dark:text-zinc-400">
        Enter your new email & password to reset your email
      </div>
    </div>

    <form @submit.prevent="onSubmit">
      <AccountInputGroup
        label="New email"
        desc="Used to sign in, for email receipts and product updates."
        :help="formErrors.email"
      >
        <InputText v-model="formData.email" placeholder="Enter your new email" @input="validateField('email')" />
      </AccountInputGroup>

      <AccountInputGroup label="Verification code" :help="formErrors.verification_code">
        <div class="flex justify-between items-center space-x-4">
          <InputText
            placeholder="Enter your verification code"
            v-model="formData.verification_code"
            class="grow"
            @input="validateField('verification_code')"
          />
          <Button class="w-1/3 justify-center" @click="onSend">
            {{ countDown.countStr }}
          </Button>
        </div>
      </AccountInputGroup>

      <AccountInputGroup label="Password" :help="formErrors.password">
        <InputText
          v-model="formData.password"
          type="password"
          placeholder="Enter your password"
          @input="validateField('password')"
        />
      </AccountInputGroup>

      <div class="py-8 w-full flex justify-end">
        <Button label="Reset email" type="submit" :loading="loading"></Button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { z } from 'zod'

const msg = useMsg()
const countDown = useCountDown()
const onSend = () => {
  if (!validateField('email')) return

  sendCode()
}
const sendCode = async () => {
  if (countDown.counting.value) return

  countDown.start()
  const { data } = await userApi.sendCode(formData.value.email)

  if (data?.pkey) {
    formData.value.pkey = data.pkey
  } else {
    countDown.end()
  }
}

const { userApi } = useApis()

const formData = ref({
  email: '',
  password: '',
  verification_code: '',
  pkey: ''
})

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string(),
  verification_code: z.string()
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
const router = useRouter()
const loading = ref(false)
const onSubmit = () => {
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
    const { message } = await userApi.putEmail(formData.value)
    msg.success({ detail: message })
    userStore.getUserInfo()
  } finally {
    loading.value = false
  }
}
</script>
