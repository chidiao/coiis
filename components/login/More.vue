<template>
  <div>
    <div class="space-y-5">
      <div class="flex items-center align-center text-center w-full flex-row">
        <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
        <div class="font-medium text-gray-700 dark:text-gray-200 flex mx-3 whitespace-nowrap">
          <span class="text-sm">or</span>
        </div>
        <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
      </div>

      <button
        type="button"
        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 w-full flex justify-center items-center"
      >
        <GithubOutlined class="size-5 shrink-0" />
        <span class="">Continue with GitHub</span>
      </button>

      <div class="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
        By signing in, you agree to our <a href="/" class="text-sky-500 font-medium">Terms of Service</a>.
      </div>
    </div>
  </div>
</template>

<script setup>
import { GithubOutlined } from '@ant-design/icons-vue'
</script>
