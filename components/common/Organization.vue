<template>
  <div
    class="group rounded-xl dark:text-white cursor-pointer transition duration-300 hover:bg-[#e0e7ff] dark:hover:bg-[#262626]"
  >
    <div class="px-5">
      <div
        class="border-t group-first:border-t-0 dark:border-[#262626] group-hover:border-transparent duration-300 transition"
      ></div>
    </div>

    <div class="px-2 py-3 xl:px-5 xl:py-5 xl:flex items-center xl:gap-5">
      <div class="shrink-0">
        <Avatar :image="organization_logo" size="large" />
      </div>

      <div class="grow">
        <div class="text-sm">{{ organization_name }}</div>
        <div class="text-sm font-bold mt-2">{{ organization_description }}</div>
        <div class="flex items-center gap-1 flex-wrap cursor-pointer py-2">
          <Tag>{{ organization_code }}</Tag>
        </div>
      </div>

      <div class="py-2 flex items-center shrink-0">
        <NuxtLink :to="`/org/${id}`">
          <Button icon="pi pi-angle-double-right" iconPos="right" label="Join now" rounded />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id?: number
  organization_code?: string
  organization_name?: string
  organization_description?: string
  organization_logo?: string
  organization_banner?: string
  gmt_create?: number
  gmt_modified?: number
  status?: number
  data_state?: boolean
  tenant_code?: string
}>()
</script>

<style scoped>
.group:hover .group .border-t,
.group:hover + .group .border-t,
.dark .group:hover .group .border-t,
.dark .group:hover + .group .border-t {
  border-color: transparent;
}
</style>
