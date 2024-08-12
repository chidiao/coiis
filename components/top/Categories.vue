<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <CommonCategory v-for="i in list" v-bind="i" />
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>
