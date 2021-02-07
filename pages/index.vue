<template>
  <div class="container">
    <FloatingNav />

    <div>
      <h1 class="title">screensavers.club</h1>



      <p v-if="$fetchState.pending">Fetching mountains...</p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div v-else>
        <h1>Nuxt Mountains</h1>
        <ul>
          <li v-for="mountain of mountains">{{ mountain.title }}</li>
        </ul>
        <button @click="$fetch">Refresh</button>
      </div>

      <NuxtLink to="/">Yo</NuxtLink>
      <NuxtLink to="/page2">Yo</NuxtLink>
      <NuxtLink to="/page3">Yo</NuxtLink>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      mountains:[]
    }
  },
  async fetch() {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then(function(res) {
      console.log(res);
      return res.json();
    })
  },
  transition: 'gobsmack'
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;

  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

a.nuxt-link-exact-active {
  color: green;
}

</style>
