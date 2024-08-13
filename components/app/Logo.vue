<template>
  <Logo />
</template>

<script lang="tsx" setup>
import LogoLight from '@/assets/svg/logo.svg'
import LogoDark from '@/assets/svg/logo-dark.svg'

const colorMode = useColorMode()
const Logo = () => {
  return colorMode.value == 'dark' ? <LogoDark /> : <LogoLight />
}
</script>
