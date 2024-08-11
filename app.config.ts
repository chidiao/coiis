export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'slate',
    notifications: {
      position: 'top-0 right-0'
    },
    button: {
      size: {
        xs: 'text-[10px]',
        sm: 'text-xs'
      },
      padding: {
        xs: 'px-4 py-2',
        sm: 'px-4 py-2'
      },
      default: {
        size: 'xs',
        loadingIcon: 'i-ant-design:loading-outlined'
      }
    }
  }
})
