<template>
  <div class="max-w-4xl mx-auto p-4">
    <page-title title="Composition API v2" />
    <div class="py-5">
      This is an example where you can build out entire component in a single
      file using Composition API.
    </div>
    <client-only>
      <masonry :cols="{ default: 3, 1000: 3, 700: 2, 400: 1 }" :gutter="20">
        <card
          v-for="(article, index) in articles"
          :key="index"
          :padding="1"
          :primary-color="colorMap[index].bg"
          secondary-color="gray-300"
          :border-width="2"
          border-radius="3xl"
          class="mb-5"
          data-aos="fade-up"
        >
          <card-content>
            <component :is="article.component" :color="colorMap[index].bg">
            </component>
          </card-content>

          <card-footer :name="article.title"> </card-footer>
        </card>
      </masonry>
    </client-only>
    <client-only>
      <infinite-loading @infinite="infiniteHandler">
        <template slot="spinner" class="text-muted small-text"
          >Loading...</template
        >
        <div slot="no-more" class="text-muted small-text">
          --- End ---
        </div>
        <div slot="no-results" class="text-muted small-text">
          No results message
        </div>
      </infinite-loading>
    </client-only>
  </div>
</template>
<script>
import {
  defineComponent,
  ref,
  useFetch,
  useContext,
  useMeta,
} from "@nuxtjs/composition-api";

import Svg1 from "~/components/svg/Svg1";
import Svg2 from "~/components/svg/Svg2";
import Svg3 from "~/components/svg/Svg3";

export default defineComponent({
  components: {
    Svg1,
    Svg2,
    Svg3,
  },
  head: {},
  setup() {
    const colorMap = [
      { bg: "light-blue", text: "gray-800" },
      { bg: "light-purple", text: "white" },
      { bg: "melon-red", text: "white" },
      { bg: "yellow", text: "gray-800" },
      { bg: "dark-purple", text: "white" },
      { bg: "lime-green", text: "gray-800" },
      { bg: "juicy-orange", text: "gray-800" },
      { bg: "light-purple", text: "white" },
      { bg: "melon-red", text: "white" },
      { bg: "yellow", text: "gray-800" },
      { bg: "light-blue", text: "gray-800" },
    ];

    const { $content } = useContext();
    const articles = ref([]);
    const limit = ref(4);
    const page = ref(0);

    function fetchData() {
      return $content("articles")
        .limit(limit.value)
        .skip(limit.value * page.value)
        .sortBy("createdAt", "desc")
        .fetch();
    }

    function infiniteHandler($state) {
      setTimeout(async () => {
        page.value += 1;
        let additionalItems = await fetchData();

        if (additionalItems.length > 0) {
          articles.value.push(...additionalItems);
          $state.loaded();
        } else {
          $state.complete();
        }
      }, 500);
    }

    useFetch(async () => {
      articles.value = await fetchData();
    });
    useMeta({ title: "v2 - Composition API" });
    return { articles, infiniteHandler, colorMap };
  },
});
</script>
