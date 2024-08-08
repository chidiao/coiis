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

      <a-form layout="vertical" class="py-8">
        <a-form-item label="Email">
          <a-input v-model:value="form.email" placeholder="Enter your email" />
        </a-form-item>

        <a-form-item>
          <template #label>
            <div class="w-full flex justify-between items-center">
              <div>Password</div>
              <RouterLink to="/account/forget" class="text-sky-500 font-medium">Forgot password?</RouterLink>
            </div>
          </template>

          <a-input v-model:value="form.password" placeholder="Enter your password" />
        </a-form-item>

        <LoginButton @click="router.replace('/')">Continue</LoginButton>
      </a-form>
    </div>
  </LoginBackground>
</template>

<script lang="ts" setup>
import LoginBackground from './components/LoginBackground.vue'
import LoginButton from './components/LoginButton.vue'
import LockButton from '@/assets/svg/lock.svg'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const form = ref<{
  email?: string
  password?: string
}>({})

const router = useRouter()
</script>

<style lang="scss" scoped>
@import url('./style.scss');
</style>
