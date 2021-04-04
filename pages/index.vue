<template>
  <div class="container mx-auto">
    <div class="flex justify-center p-5">
      <card
        :padding="3"
        primary-color="green-400"
        secondary-color="gray-300"
        :border-width="2"
        border-radius="2xl"
        class="w-72"
      >
        <card-header>
          <span class="text-green-400"> Tailwind </span>
          <span> Masonry Grid </span>
        </card-header>
        <card-image src="user.png" gutter> </card-image>
        <card-header class="text-gray-700">
          <span> Infinite Loading </span>
          <span> Nuxt </span>
        </card-header>
        <card-footer
          invert
          name="CARD DESIGN PROJECT"
          category="Collection of card designs"
        >
        </card-footer>
      </card>
    </div>
  </div>
</template>
