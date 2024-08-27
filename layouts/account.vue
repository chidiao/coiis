<template>
  <DefaultLayout>
    <div class="grid gap-5">
      <Tabs :value="active">
        <TabList>
          <Tab v-for="i in links" class="space-x-3" :value="i.route" @click="router.push(i.route)">
            <i :class="[i.icon]"></i>
            <span>{{ i.label }}</span>
          </Tab>
        </TabList>
      </Tabs>
      <slot />
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/default.vue'

const router = useRouter()
const route = useRoute()

const active = computed(() => route.path)

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
