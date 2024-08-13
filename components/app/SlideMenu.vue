<template>
  <USlideover v-model="model" side="left">
    <UCard class="h-full" :ui="{ shadow: 'shadow-none' }">
      <template #header>
        <div class="flex justify-between items-center">
          <AppLogo class="w-16 shrink-0 cursor-pointer" />

          <UIcon name="i-heroicons-x-mark" class="size-6" @click="model = false" />
        </div>
      </template>

      <AppMenu />
    </UCard>
  </USlideover>
</template>

<script setup>
const model = defineModel()
</script>
