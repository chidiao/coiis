<template>
  <div>
    <div class="font-bold text-xl dark:text-white">Workspace</div>

    <CommonBanner
      title="Exciting news! You can now explore the new analytics dashboard"
      sub-title="New analytics dashboards specifically catered to the metrics that matter most to both API providers and API
          consumers. Whether you’re on the providing or receiving end of APIs, rest assured, we’ve got your back!"
      img="https://rapidapi.com/hub/_next/image?url=%2Fhub%2Fimages%2Fworkspace-hero-analytics.png&w=640&q=75"
    >
      <Button size="small">Explore Analytics</Button>
    </CommonBanner>

    <div class="font-bold text-xl">My APIs</div>
    <div class="text-gray-500 dark:text-zinc-400 text-sm mt-3">
      This section shows you information regarding APIs that you, your teams or your organizations have created. The
      scope is determined by your context.
    </div>

    <div class="flex gap-5 py-5 w-full flex-wrap">
      <ApiStatus title="Total APIs"> 0 </ApiStatus>
      <ApiStatus title="Total Subscribers"> 0 </ApiStatus>
      <ApiStatus title="API Calls 24h"> 0 </ApiStatus>
      <ApiStatus title="Sales 24h"> 0 </ApiStatus>
      <ApiStatus title="Total APIs"> 0 </ApiStatus>
      <ApiStatus title="Total APIs"> 0 </ApiStatus>
      <ApiStatus title="Total APIs"> 0 </ApiStatus>
    </div>

    <div class="relative h-44 my-8">
      <div class="absolute z-10 flex h-full w-full flex-col items-center justify-center px-5 text-center gap-2">
        <div class="dark:text-white">There are no APIs that you manage</div>
        <div class="text-gray-500 dark:text-zinc-400 text-sm">
          Consider creating an API on our platform to share it with everyone or keep it private
        </div>
        <Button size="small">Create new Project</Button>
      </div>

      <CommonGridBackground />
    </div>

    <div class="font-bold text-xl mt-8">My Subscriptions</div>
    <div class="text-gray-500 dark:text-zinc-400 text-sm mt-3">
      This section shows you information regarding APIs that you, your teams or your organizations are subscribed to.
      The scope is determined by your context.
    </div>

    <div class="flex gap-5 py-5 w-full flex-wrap">
      <ApiStatus title="Total APIs"> 0 </ApiStatus>
      <ApiStatus title="Total Subscribers"> 0 </ApiStatus>
      <ApiStatus title="API Calls 24h"> 0 </ApiStatus>
    </div>

    <div class="relative h-44 my-8">
      <div class="absolute z-10 flex h-full w-full flex-col items-center justify-center px-5 text-center gap-2">
        <div class="dark:text-white">There are no APIs that you subscribed to</div>
        <div class="text-gray-500 dark:text-zinc-400 text-sm">Explore now</div>
        <Button size="small">Find your next API</Button>
      </div>

      <CommonGridBackground />
    </div>
  </div>
</template>
