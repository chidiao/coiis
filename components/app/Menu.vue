<template>
  <div class="w-full">
    <UVerticalNavigation :links="menu.links" :ui="menu.ui" />
  </div>
</template>

<script lang="ts" setup>
import { menu } from './config'
</script>
