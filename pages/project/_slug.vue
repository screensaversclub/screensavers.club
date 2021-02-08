<template>
  <div>
    <nuxt-content :document="project" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('project', params.slug || 'index').fetch()
    return { project }
  },
  data() {},
}
</script>
