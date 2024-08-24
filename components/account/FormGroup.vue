<template>
  <UFormGroup v-bind="$attrs" label="Password" :ui="ui" name="password">
    <slot />
  </UFormGroup>
</template>

<script setup>
const ui = {
  wrapper: 'md:flex items-center md:justify-between border-b py-8',
  container: 'mt-4 w-full md:w-1/2 md:max-w-md'
}
</script>
