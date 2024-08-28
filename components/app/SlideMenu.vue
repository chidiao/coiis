<template>
  <Drawer v-model:visible="model" class="!w-full md:!w-80" header="Coiis">
    <AppMenu />
  </Drawer>
</template>

<script setup>
const model = defineModel()
</script>
