<template>
  <div class="">
    <div class="flex justify-center py-3 border-b-2">
      <nuxt-link to="/"> Home </nuxt-link>
      <nuxt-link to="/regular-nuxt"> Regular Nuxt </nuxt-link>
      <nuxt-link to="/composition-api-v1"> Composition API v1 </nuxt-link>
      <nuxt-link to="/composition-api-v2"> Composition API v2 </nuxt-link>
      <nuxt-link to="/composition-api-v3"> Composition API v3 </nuxt-link>
    </div>
    <nuxt />
    <div class="flex justify-center py-5 border-t-2">
      <a href="https://twitter.com/KrutiePatel"> @KrutiePatel </a>
      <a
        href="https://krutiepatel.com/blog/how-to-build-pinterest-like-infinite-grid-in-nuxt"
      >
        Article Link
      </a>
      <a href="https://github.com/Krutie/infinite-masonry-with-nuxt">
        Github Link
      </a>
    </div>
  </div>
</template>
<style>
a {
  @apply px-2 text-center text-sm;
}
.nuxt-link-exact-active {
  @apply text-green-600;
}

/*global page transition*/
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

<style scoped lang="scss">
img {
  transition: all ease 0.3s;
  opacity: 0;
  &[lazy="loading"] {
    opacity: 1;
    filter: blur(15px);
  }
  &[lazy="loaded"] {
    opacity: 1;
  }
}
</style>
