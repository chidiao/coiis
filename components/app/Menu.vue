<template>
  <div class="w-full flex flex-col gap-1">
    <NuxtLink :class="[baseClass, colorClass]" v-for="i in menu" :to="i.route">
      <i :class="i.icon"></i>
      <span>{{ i.label }}</span>
    </NuxtLink>

    <AppMenuCategories />
  </div>
</template>

<script lang="ts" setup>
import { menu, baseClass, colorClass } from './config'
</script>
