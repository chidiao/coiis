<template>
  <div class="container mx-auto p-5">
    <div class="flex flex-col justify-between items-start xl:flex-row xl:items-center">
      <div class="font-bold text-xl dark:text-white">Collections</div>

      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText placeholder="Search" />
      </IconField>
    </div>

    <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
      <CommonCollection v-for="i in 16" :value="i" />
    </div>
  </div>
</template>
