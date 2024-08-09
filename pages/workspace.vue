<template>
  <div>
    <div class="font-bold text-xl dark:text-white">Workspace</div>

    <CommonBanner
      title="Exciting news! You can now explore the new analytics dashboard"
      sub-title="New analytics dashboards specifically catered to the metrics that matter most to both API providers and API
          consumers. Whether you’re on the providing or receiving end of APIs, rest assured, we’ve got your back!"
      img="https://rapidapi.com/hub/_next/image?url=%2Fhub%2Fimages%2Fworkspace-hero-analytics.png&w=640&q=75"
    >
      <a-button type="primary">Explore Analytics</a-button>
    </CommonBanner>

    <div class="font-bold text-xl text-blue-500">My APIs</div>
    <div class="text-gray-400 text-sm mt-3">
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
      <div class="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-2">
        <div class="dark:text-white">There are no APIs that you manage</div>
        <div class="text-gray-400">
          Consider creating an API on our platform to share it with everyone or keep it private
        </div>
        <a-button type="primary" class="mt-8">Create new Project</a-button>
      </div>

      <CommonGridBackground />
    </div>

    <div class="font-bold text-xl text-blue-500 mt-8">My Subscriptions</div>
    <div class="text-gray-400 text-sm mt-3">
      This section shows you information regarding APIs that you, your teams or your organizations are subscribed to.
      The scope is determined by your context.
    </div>

    <div class="flex gap-5 py-5 w-full flex-wrap">
      <ApiStatus title="Total APIs"> 0 </ApiStatus>
      <ApiStatus title="Total Subscribers"> 0 </ApiStatus>
      <ApiStatus title="API Calls 24h"> 0 </ApiStatus>
    </div>

    <div class="relative h-44 my-8">
      <div class="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-2">
        <div class="dark:text-white">There are no APIs that you subscribed to</div>
        <div class="text-gray-400">Explore now</div>
        <a-button type="primary" class="mt-8">Find your next API</a-button>
      </div>

      <CommonGridBackground />
    </div>
  </div>
</template>
