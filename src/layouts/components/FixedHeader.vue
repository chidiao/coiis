<template>
  <header
    class="w-full h-16 bg-white dark:bg-[#212121] fixed left-0 top-0 z-50 border-b border-gray-200 dark:border-gray-700"
  >
    <div class="container h-full mx-auto px-5 md:px-0">
      <div class="size-full flex justify-between items-center">
        <Logo class="w-16 shrink-0 cursor-pointer" @click="showLeft = true" />

        <DrawerMenu v-model="showLeft" />

        <div class="hidden xl:flex items-center space-x-3">
          <a-button type="text">Add Your Api</a-button>
          <a-button type="primary">Sign In</a-button>
          <a-button>Sign Up</a-button>
          <a-button @click="darkMode = !darkMode">toggle</a-button>
        </div>

        <MenuOutlined class="xl:hidden" @click="showRight = true" />

        <a-drawer width="300" placement="right" :open="showRight" @close="showRight = false">
          <div class="flex flex-col space-y-3">
            <a-button block type="text">Add Your Api</a-button>
            <a-button block type="primary">Sign In</a-button>
            <a-button block>Sign Up</a-button>
          </div>
        </a-drawer>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Logo from '@/assets/svg/logo.svg'
import { MenuOutlined } from '@ant-design/icons-vue'
import DrawerMenu from './DrawerMenu.vue'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

const darkMode = useStorage('darkMode', false)

const showLeft = ref<boolean>(false)
const showRight = ref<boolean>(false)
</script>
