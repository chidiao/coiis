export const menu = {
  links: [
    {
      label: 'Home',
      icon: 'i-heroicons-home',
      to: '/app'
    },
    {
      label: 'Workspace',
      icon: 'i-heroicons-briefcase',
      to: '/app/workspace'
    },
    {
      label: 'Collections',
      icon: 'i-heroicons-star',
      to: '/app/collections'
    },
    {
      label: 'Categories',
      icon: 'i-heroicons-squares-2x2',
      to: '/app/category'
    },
    {
      label: 'Search',
      icon: 'i-heroicons-magnifying-glass',
      to: '/search'
    }
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
