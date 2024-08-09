<template>
  <button
    type="submit"
    class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-500 dark:bg-sky-400 dark:hover:bg-sky-500 dark:disabled:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:focus-visible:outline-sky-400 w-full flex justify-center items-center"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>
