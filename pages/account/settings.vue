<template>
  <div class="container mx-auto">
    <div class="text-xl font-bold py-2">Settings</div>

    <AppLoading v-if="userStore.loading" />

    <div v-if="!userStore.isLogin">
      <UButton color="red">Sign in</UButton>
    </div>

    <div v-if="!userStore.loading && userStore.isLogin" class="w-full max-w-sm my-5 space-y-5">
      <UFormGroup label="Nickname" help="Your name may appear around Coiis.">
        <UInput placeholder="Enter your name" v-model="state.nickname" />
      </UFormGroup>

      <UFormGroup label="First name">
        <UInput v-model="state.first_name" />
      </UFormGroup>

      <UFormGroup label="Last name">
        <UInput v-model="state.last_name" />
      </UFormGroup>

      <UFormGroup label="Phone number">
        <UInput v-model="state.phone_number" />
      </UFormGroup>

      <UDivider label="UserInfo" />

      <UFormGroup label="Age">
        <UInput type="number" v-model="state.user_info!.user_age" />
      </UFormGroup>

      <UFormGroup label="Gender">
        <USelectMenu
          v-model="state.user_info!.user_gender"
          :options="genders"
          placeholder="-"
          value-attribute="value"
          option-attribute="label"
        />
      </UFormGroup>

      <UFormGroup label="Avatar url">
        <UInput v-model="state.user_info!.avatar_url" />
      </UFormGroup>

      <UFormGroup label="Company name">
        <UInput v-model="state.user_info!.company_name" />
      </UFormGroup>

      <UFormGroup label="Company tel">
        <UInput v-model="state.user_info!.company_tel" />
      </UFormGroup>

      <UFormGroup label="Address">
        <UInput v-model="state.user_info!.address" />
      </UFormGroup>

      <UButton :loading="updateLoading" @click="update">Update</UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UserInfoParams } from '@/types/user'

const userStore = useUserStore()
const getData = async () => {
  await userStore.getUserInfo()
  state.value = Object.assign(state.value, userStore.userInfo)
}

const state = ref<UserInfoParams>({
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
    const { data } = await userApi.putUserInfo(state.value)
  } finally {
    getData()
    updateLoading.value = false
  }
}

onMounted(() => {
  getData()
})
</script>
