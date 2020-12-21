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
      <a href="#"> @KrutiePatel </a>
      <a href="#"> Article Link </a>
      <a href="#"> Github Link </a>
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
