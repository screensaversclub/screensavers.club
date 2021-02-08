<template>
  <div>
    <h1>
      <span>s</span><span>c</span><span>r</span><span>e</span><span>e</span
      ><span>n</span><span>s</span><span>a</span><span>v</span><span>e</span
      ><span>r</span><span>s</span>
    </h1>
  </div>
</template>

<style scoped>
div {
  @apply fixed bottom-1 right-1;
}

h1 {
  @apply flex;
}

h1 span {
  @apply text-sm pl-1 pr-1 pt-0 pb-0 block border border-black border-r-0 box-border 
		md:text-xl md:pl-2 md:pr-2 md:pt-0 md:pb-1;
}

h1 span:nth-child(2n + 0) {
  @apply bg-black text-white;
}

h1 span:last-child {
  @apply border-r;
}
</style>
