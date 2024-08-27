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
    select: {
      default: {
        size: 'xs'
      }
    },
    selectMenu: {
      option: {
        size: 'text-xs'
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
    }
  }
})
