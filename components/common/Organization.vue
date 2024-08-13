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
        <UAvatar src="https://picsum.photos/200" size="lg" />
      </div>

      <div class="grow">
        <div class="text-sm">Robinhood</div>
        <div class="text-sm font-bold mt-2">Engineering Manager Developer Experience</div>
        <div class="flex items-center gap-1 flex-wrap cursor-pointer py-2">
          <UBadge variant="soft" size="xs">Sports</UBadge>
          <UBadge variant="soft" size="xs">Finance</UBadge>
        </div>
      </div>

      <div class="py-2 flex items-center shrink-0">
        <UButton icon="i-heroicons-paper-airplane" class="rounded-full" trailing to="/org/6">Join now</UButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group:hover .group .border-t,
.group:hover + .group .border-t,
.dark .group:hover .group .border-t,
.dark .group:hover + .group .border-t {
  border-color: transparent;
}
</style>
