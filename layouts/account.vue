<template>
  <DefaultLayout>
    <div class="grid gap-5">
      <Tabs value="/account/settings">
        <TabList>
          <Tab v-for="i in links" :value="i.route">
            <NuxtLink :to="i.route" class="space-x-3">
              <i :class="[i.icon]"></i>
              <span>{{ i.label }}</span>
            </NuxtLink>
          </Tab>
        </TabList>
      </Tabs>
      <slot />
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/default.vue'

const links = [
  {
    label: 'Profile',
    icon: 'pi pi-user-edit',
    route: '/account/settings'
  },
  {
    label: 'Security',
    icon: 'pi pi-shield',
    route: '/account/password'
  }
]
</script>
