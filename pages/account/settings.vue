<template>
  <div class="container mx-auto">
    <div class="py-5">
      <div class="text-xl font-bold">General</div>
      <div class="mt-2 text-sm text-gray-500 dark:text-zinc-400">
        Basic info,like your name and address that will displayed in public
      </div>
    </div>

    <AppLoading v-if="userStore.loading" />

    <div v-if="!userStore.isLogin && !userStore.loading">
      <Button severity="danger">Sign in</Button>
    </div>

    <div v-if="!userStore.loading && userStore.isLogin">
      <div class="w-full">
        <AccountInputGroup label="Nickname" desc="Your name may appear around Coiis.">
          <InputText placeholder="Enter your name" v-model="formData.nickname" />
        </AccountInputGroup>

        <AccountInputGroup label="First name">
          <InputText v-model="formData.first_name" />
        </AccountInputGroup>

        <AccountInputGroup label="Last name">
          <InputText v-model="formData.last_name" />
        </AccountInputGroup>

        <AccountInputGroup label="Phone number">
          <InputText v-model="formData.phone_number" />
        </AccountInputGroup>

        <AccountInputGroup label="Age">
          <InputText type="number" v-model="formData.user_info!.user_age" />
        </AccountInputGroup>

        <AccountInputGroup label="Gender">
          <Select
            v-model="formData.user_info!.user_gender"
            :options="genders"
            placeholder="-"
            optionValue="value"
            optionLabel="label"
          />
        </AccountInputGroup>

        <AccountInputGroup label="Avatar url">
          <InputText v-model="formData.user_info!.avatar_url" />
        </AccountInputGroup>

        <AccountInputGroup label="Company name">
          <InputText v-model="formData.user_info!.company_name" />
        </AccountInputGroup>

        <AccountInputGroup label="Company tel">
          <InputText v-model="formData.user_info!.company_tel" />
        </AccountInputGroup>

        <AccountInputGroup label="Address">
          <InputText v-model="formData.user_info!.address" />
        </AccountInputGroup>

        <div class="py-8 w-full flex justify-end">
          <Button label="Save changes" :loading="updateLoading" @click="update"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'account'
})
import type { UserInfoParams } from '@/types/user'

const userStore = useUserStore()
const getData = async () => {
  const info = await userStore.getUserInfo()
  formData.value = Object.assign({}, info, { user_info: { ...info?.user_info } })
}

const formData = ref<UserInfoParams>({
  user_info: {}
})

const genders = [
  { value: 0, label: '-' },
  { value: 1, label: 'Male' },
  { value: 2, label: 'Female' },
  { value: 3, label: 'Other' }
]

const { userApi } = useApis()
const updateLoading = ref(false)
const update = async () => {
  updateLoading.value = true
  try {
    const { data } = await userApi.putUserInfo(formData.value)
  } finally {
    getData()
    updateLoading.value = false
  }
}

onMounted(() => {
  getData()
})
</script>
