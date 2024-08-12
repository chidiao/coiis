<template>
  <div class="flex items-center">
    <div class="hidden xl:flex items-center space-x-3">
      <UButton v-for="(i, k) in items[0]" @click="i.click" :color="k > 0 ? 'white' : 'primary'">{{ i.label }}</UButton>
    </div>

    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <UIcon name="i-heroicons-bars-3" class="size-6 xl:hidden" />
    </UDropdown>
  </div>
</template>

<script setup>
const router = useRouter()

const items = [
  [
    {
      label: 'Sign In',
      click: () => {
        router.push('/account/login')
      }
    },
    {
      label: 'Sign Up',
      click: () => {
        router.push('/account/signup')
      }
    }
  ]
]
</script>
