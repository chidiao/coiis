export const useCountDown = () => {
  const count = ref(0)
  const countStr = computed(() => (count.value > 0 ? `${count.value}s` : 'Send'))
  const counting = computed(() => count.value > 0)

  const timer = ref()
  const start = () => {
    count.value = 60
    timer.value = setInterval(() => {
      if (count.value-- === 0) {
        end()
      }
    }, 1000)
  }

  const end = () => {
    clearInterval(timer.value)
    count.value = 0
  }

  return {
    countStr,
    counting,
    start,
    end
  }
}
