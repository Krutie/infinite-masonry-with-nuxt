<template>
  <div class="max-w-4xl mx-auto p-4">
    <page-title title="Composition API v1" />
    <div class="py-5">
      This is an example where all articles are fetched upfront using Nuxt
      Content module.
    </div>
      <masonry :cols="{ default: 3, 1000: 3, 700: 2, 400: 1 }" :gutter="20">
        <div v-for="(article, index) in articles" :key="index">
          <card
            :padding="3"
            :border-width="2"
            primary-color="dark-purple"
            cardBg="white"
            border-radius="lg"
            class="mb-5"
          >
            <card-header class="text-gray-500">
              <client-only>
                <span> <v-icon name="heart" scale="1" /> </span>
                <span> <v-icon name="link" scale="1" /> </span>
              </client-only>
            </card-header>
            <card-content>
              <card-image v-if="article.image" :src="article.image">
              </card-image>
              <span v-else class="text-sm text-gray-600">
                {{ article.description }}
              </span>
            </card-content>
            <card-footer left :name="article.title"> </card-footer>
          </card>
        </div>
      </masonry>
  </div>
</template>
<script>
import {
  defineComponent,
  useContext,
  ref,
  useFetch,
  useAsync,
  useMeta,
} from "@nuxtjs/composition-api";

export default defineComponent({
  head: {},
  setup() {
    const { $content } = useContext();
    const articles = useAsync(async () => await $content("articles")
        .sortBy("createdAt", "desc")
        .fetch())

    useMeta({
      title: "v1 - Composition API",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "my website description",
        },
      ],
    });

    return { articles };
  },
});
</script>
