<template>
  <div class="dark:bg-gray-950">
    <div class="h-screen flex items-center justify-center overlay">
      <div class="gradient"></div>

      <!-- form -->
      <div
        class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow w-full max-w-sm bg-white/75 dark:bg-white/5 backdrop-blur"
      >
        <div class="px-4 py-5 sm:p-6">
          <slot></slot>

          <LoginMore />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  background-image: linear-gradient(to right, rgb(229 231 235) 0.5px, transparent 0.5px),
    linear-gradient(to bottom, rgb(229 231 235) 0.5px, transparent 0.5px);
  background-size: 100px 100px;
}

.gradient {
  background: radial-gradient(50% 50% at 50% 50%, rgb(14 165 233 / 0.25) 0, #fff);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: absolute;
}

.dark {
  .overlay {
    background-image: linear-gradient(to right, rgb(17 24 39) 0.5px, transparent 0.5px),
      linear-gradient(to bottom, rgb(17 24 39) 0.5px, transparent 0.5px);
  }

  .gradient {
    background: radial-gradient(50% 50% at 50% 50%, rgb(56 189 248 / 0.1) 0, rgb(3 7 18));
  }
}
</style>
