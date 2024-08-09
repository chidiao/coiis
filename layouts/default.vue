<template>
  <div class="w-full">
    <AppHeader />

    <div>
      <div
        class="w-[240px] h-[calc(100vh-64px)] dark:bg-[#1f1f1f] border-r border-gray-200 dark:border-gray-700 fixed left-0 top-16 z-50 hidden xl:block"
      >
        <AppMenu />
      </div>

      <div class="flex justify-between bg-white dark:bg-[#212121]">
        <div class="w-[240px] shrink-0 hidden xl:block"></div>

        <div class="grow p-5 xl:px-8">
          <div class="h-16"></div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
