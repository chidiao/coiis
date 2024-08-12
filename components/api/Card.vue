<template>
  <div class="group w-full h-48 flex flex-col rounded-lg border dark:border-gray-700 p-3 cursor-pointer">
    <div class="w-full h-5 flex justify-between items-center mb-3">
      <UBadge size="xs" variant="soft">{{ tag }}</UBadge>

      <div v-auto-animate>
        <UIcon name="i-heroicons-heart" v-if="isLike" />
        <UIcon name="i-heroicons-heart-solid" class="text-red-500" v-else />
      </div>
    </div>

    <div class="w-full grow flex justify-start items-start">
      <div class="shrink-0 mr-2">
        <UAvatar class="size-8" :src="icon" />
      </div>

      <div class="grow h-full flex flex-col justify-between">
        <div
          class="w-full text-sm font-semibold line-clamp-1 hover:underline group-hover:text-sky-500 transition-all duration-300 dark:text-white"
        >
          {{ title }}
        </div>

        <div class="w-full h-8 line-clamp-2 text-xs text-gray-500 dark:text-zinc-400 mt-2">{{ desc }}</div>

        <div
          class="w-full flex justify-between items-center space-x-2 mt-auto text-xs text-gray-500 dark:text-zinc-400"
        >
          <div>By RockApis</div>
          <div>Updated 14 hours ago</div>
        </div>

        <div class="flex items-center space-x-2 mt-3">
          <TagScore />
          <TagLatency />
          <TagLevel />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
const props = defineProps<{
  tag?: string
  isLike?: boolean
  icon?: string
  title?: string
  desc?: string
  score?: string | number
  latency?: string | number
  level?: string | number
}>()

const TagScore = () => {
  return (
    <div class="flex h-6 items-center gap-1.5 rounded border px-1.5 dark:border-zinc-400 text-gray-400 dark:text-zinc-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="h-3.5 w-3.5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
      </svg>
      <div class="text-xs">{props.score}</div>
    </div>
  )
}
const TagLatency = () => {
  return (
    <div class="flex h-6 items-center gap-1.5 rounded border px-1.5 dark:border-zinc-400 text-gray-400 dark:text-zinc-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="h-3.5 w-3.5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-xs">{props.latency}ms</span>
    </div>
  )
}
const TagLevel = () => {
  return (
    <div class="flex h-6 items-center gap-1.5 rounded border px-1.5 dark:border-zinc-400 text-gray-400 dark:text-zinc-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="h-3.5 w-3.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
        ></path>
      </svg>
      <div class="text-xs">{props.level}%</div>
    </div>
  )
}
</script>
