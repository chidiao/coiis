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

      <a-form layout="vertical" class="py-8">
        <a-form-item label="Email">
          <a-input v-model:value="form.email" placeholder="Enter your email" />
        </a-form-item>

        <a-form-item label="Code">
          <a-input v-model:value="form.code" placeholder="Enter your code" />
        </a-form-item>

        <a-form-item label="Password">
          <a-input v-model:value="form.password" placeholder="Enter your password" />
        </a-form-item>

        <LoginButton>Reset password</LoginButton>
      </a-form>
    </div>
  </LoginBackground>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'empty'
})
const form = ref<{
  email?: string
  code?: string
  password?: string
}>({})
</script>

<style lang="scss" scoped>
@import url('./style.scss');
</style>
