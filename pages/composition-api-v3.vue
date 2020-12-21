<template>
  <div class="max-w-4xl mx-auto p-4">
    <page-title title="Nuxt Composition API v3 - with Usables" />
    <div class="py-5">
      In this example, we have created reusable components (Composables) with
      Composition API.
    </div>
    <client-only>
      <masonry :cols="{ default: 3, 1000: 3, 400: 1 }" :gutter="20">
        <card
          v-for="(article, index) in items"
          :key="index"
          :padding="5"
          :border-width="8"
          border-radius="2xl"
          data-aos="flip-up"
          class="mb-5"
        >
          <card-content gradient>
            <page-subtitle class="uppercase font-title" :title="article.title">
            </page-subtitle>
          </card-content>
          <card-footer
            left
            class="text-gray-800"
            v-if="article.image"
            :category="article.description"
          >
          </card-footer>
        </card>
      </masonry>
    </client-only>
    <client-only>
      <infinite-loading @infinite="infiniteHandler">
        <template slot="spinner">Loading...</template>
        <div slot="no-more">
          --- End ---
        </div>
        <div slot="no-results">
          No results message
        </div>
      </infinite-loading>
    </client-only>
  </div>
</template>
<script>
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

import useInfiniteMasonry from "../use/infiniteMasonry";
import InfiniteLoading from "vue-infinite-loading";

export default defineComponent({
  components: {
    InfiniteLoading,
  },
  head: {},
  setup() {
    const { items, infiniteHandler } = useInfiniteMasonry({
      path: "articles",
      limit: 3,
    });
    useMeta({ title: "v3 - Composition API" });
    return { items, infiniteHandler };
  },
});
</script>
