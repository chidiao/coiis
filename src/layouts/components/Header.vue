<template>
  <a-layout-header class="fixed w-full z-50 border-b border-solid border-gray-200">
    <div class="size-full flex justify-between items-center">
      <router-link to="/">
        <Logo class="w-16" />
      </router-link>

      <div class="flex items-center space-x-3">
        <a-button type="text">Add Your Api</a-button>
        <a-button type="primary">Sign In</a-button>
        <a-button>Sign Up</a-button>
      </div>
    </div>
  </a-layout-header>
</template>

<script setup>
import Logo from '@/assets/svg/coiis-logo.svg'
</script>
