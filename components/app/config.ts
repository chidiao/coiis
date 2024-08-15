export const menu = {
  links: [
    [
      {
        label: 'Home',
        icon: 'i-heroicons-home',
        to: '/app'
      },
      {
        label: 'Workspace',
        icon: 'i-heroicons-chart-bar',
        to: '/app/workspace'
      },
      {
        label: 'Collections',
        icon: 'i-heroicons-star',
        to: '/app/collections'
      },
      {
        label: 'Organizations',
        icon: 'i-heroicons-briefcase',
        to: '/org'
      }
    ],
    [
      {
        label: 'Categories',
        icon: 'i-heroicons-squares-2x2'
      }
    ]
  ],
  ui: {
    base: 'gap-3',
    padding: 'px-5 py-4',
    size: 'text-xs',
    inactive: 'text-gray-600 dark:text-zinc-400',
    icon: {
      base: 'size-4',
      inactive: 'text-gray-600 dark:text-zinc-400'
    }
  }
}
