<template>
  <div class="container mx-auto dark:text-white">
    <div class="text-xl font-bold py-5">Top organization</div>

    <div class="py-5">
      <CommonOrganization v-for="i in 16" :key="i" />
    </div>
  </div>
</template>
