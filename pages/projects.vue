<template>
  <div class="container mt-20 mb-5">
    <div v-for="project in projects" :key="project.title">
      &rarr; <NuxtLink :to="project.path">{{ project.title }}</NuxtLink>
    </div>
    <pre>{{ projects }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('project').fetch()
    return { projects }
  },
  data() {
    return {
      projects: [],
    }
  },
}
</script>
