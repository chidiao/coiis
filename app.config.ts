export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'slate',
    button: {
      size: {
        xs: 'text-[10px]',
        sm: 'text-xs'
      },
      padding: {
        xs: 'px-4 py-2',
        sm: 'px-4 py-2'
      },
      icon: {
        size: {
          xs: 'size-3',
          md: 'size-4'
        }
      },
      default: {
        size: 'xs',
        loadingIcon: 'i-feather-loader'
      }
    },
    dropdown: {
      item: {
        base: 'gap-2',
        padding: 'p-2',
        size: 'text-xs',
        icon: {
          base: 'size-4'
        }
      }
    },
    notifications: {
      position: 'top-0 bottom-[unset]'
    }
  }
})
