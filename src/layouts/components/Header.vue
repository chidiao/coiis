<template>
  <a-layout-header class="fixed w-full z-50 border-b border-solid border-gray-200">
    <div class="size-full flex justify-between items-center">
      <Logo class="w-16 shrink-0" @click="showLeft = true" />

      <DrawerMenu v-model="showLeft" />

      <div class="hidden xl:flex items-center space-x-3">
        <a-button type="text">Add Your Api</a-button>
        <a-button type="primary">Sign In</a-button>
        <a-button>Sign Up</a-button>
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
  </a-layout-header>
</template>

<script lang="ts" setup>
import Logo from '@/assets/svg/coiis-logo.svg'
import { MenuOutlined } from '@ant-design/icons-vue'
import DrawerMenu from './DrawerMenu.vue'
import { ref } from 'vue'

const showLeft = ref<boolean>(false)
const showRight = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.ant-layout-header {
  padding-inline: 20px;

  @media screen and (min-width: 1280px) {
    padding-inline: 50px;
  }
}
</style>
