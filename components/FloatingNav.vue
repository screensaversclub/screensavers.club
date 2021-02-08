<template>
  <div class="floating-nav">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/projects">Projects</NuxtLink>
    <NuxtLink to="/docs">Docs</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
  </div>
</template>

<style scoped>
.floating-nav {
  @apply fixed top-1 left-1;
}
</style>
