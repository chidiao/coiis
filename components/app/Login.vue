<template>
  <div class="flex items-center">
    <div class="hidden xl:flex items-center space-x-3">
      <NuxtLink v-for="i in items" :to="i.route">
        <Button :label="i.label" size="small" :severity="i.severity" />
      </NuxtLink>
    </div>

    <div class="flex xl:hidden">
      <Button icon="pi pi-bars" size="small" @click="(e) => menu.toggle(e)"></Button>
      <TieredMenu ref="menu" :model="items" popup>
        <template #item="{ item }">
          <NuxtLink :to="item.route">
            <div class="py-2 px-5">
              {{ item.label }}
            </div>
          </NuxtLink>
        </template>
      </TieredMenu>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const menu = ref()
const items = [
  {
    label: 'Sign In',
    route: '/account/login'
  },
  {
    label: 'Sign Up',
    severity: 'secondary',
    route: '/account/signup'
  }
]
</script>
