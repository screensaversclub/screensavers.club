<template>
  <div class="font-body">
    <Logo />
    <FloatingNav />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/lne8eqb.css' },
      ],
    }
  },
}
</script>
