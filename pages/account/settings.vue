<template>
  <div class="container mx-auto">
    <div class="py-5">
      <div class="text-xl font-bold">General</div>
      <div class="mt-2 text-sm text-gray-500 dark:text-zinc-400">
        Basic info,like your name and address that will displayed in public
      </div>
    </div>

    <AppLoading v-if="userStore.loading" />

    <div v-if="!userStore.isLogin">
      <UButton color="red">Sign in</UButton>
    </div>

    <div v-if="!userStore.loading && userStore.isLogin">
      <div class="w-full">
        <AccountFormGroup label="Nickname" description="Your name may appear around Coiis.">
          <UInput placeholder="Enter your name" v-model="state.nickname" />
        </AccountFormGroup>

        <AccountFormGroup label="First name">
          <UInput v-model="state.first_name" />
        </AccountFormGroup>

        <AccountFormGroup label="Last name">
          <UInput v-model="state.last_name" />
        </AccountFormGroup>

        <AccountFormGroup label="Phone number">
          <UInput v-model="state.phone_number" />
        </AccountFormGroup>

        <UDivider />

        <AccountFormGroup label="Age">
          <UInput type="number" v-model="state.user_info!.user_age" />
        </AccountFormGroup>

        <AccountFormGroup label="Gender">
          <USelectMenu
            v-model="state.user_info!.user_gender"
            :options="genders"
            placeholder="-"
            value-attribute="value"
            option-attribute="label"
          />
        </AccountFormGroup>

        <AccountFormGroup label="Avatar url">
          <UInput v-model="state.user_info!.avatar_url" />
        </AccountFormGroup>

        <AccountFormGroup label="Company name">
          <UInput v-model="state.user_info!.company_name" />
        </AccountFormGroup>

        <AccountFormGroup label="Company tel">
          <UInput v-model="state.user_info!.company_tel" />
        </AccountFormGroup>

        <AccountFormGroup label="Address">
          <UInput v-model="state.user_info!.address" />
        </AccountFormGroup>

        <div class="py-8 w-full flex justify-end">
          <UButton size="sm" :loading="updateLoading" @click="update">Save changes</UButton>
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
  state.value = Object.assign({}, info, { user_info: { ...info?.user_info } })
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
