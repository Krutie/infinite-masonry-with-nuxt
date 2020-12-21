<template>
  <div class="max-w-6xl mx-auto p-4">
    <page-title title="Regular Nuxt"> </page-title>
    <div class="py-5">
      This is an example of infinite-loading masonry grid built with regular
      Nuxt with options API.
    </div>
    <client-only>
      <masonry :cols="{ default: 4, 1000: 3, 700: 2, 400: 1 }" :gutter="20">
        <div v-for="article in articles">
          <card
            :padding="3"
            primary-color="green-500"
            secondary-color="gray-300"
            border-radius="lg"
            class="mb-5"
            data-aos="fade-up"
          >
            <card-header class="text-gray-500">
              <span> <v-icon name="book-open" scale="1" /> </span>
              <span> Nuxt Js </span>
            </card-header>
            <card-content>
              <card-image v-if="article.image" :src="article.image">
              </card-image>
              <span v-else> {{ article.description }} </span>
            </card-content>
            <card-footer invert :name="article.title"> </card-footer>
          </card>
        </div>
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
export default {
  data() {
    return {
      page: 0,
      limit: 4,
      articles: [],
    };
  },
  head: {
    title: "Regular Nuxt",
  },
  async fetch() {
    this.articles = await this.fetchData();
  },
  methods: {
    fetchData() {
      return this.$content("articles")
        .limit(this.limit)
        .skip(this.limit * this.page)
        .sortBy("createdAt", "desc")
        .fetch();
    },
    infiniteHandler($state) {
      setTimeout(async () => {
        this.page += 1;
        let additionalItems = await this.fetchData();

        if (additionalItems.length > 0) {
          this.articles.push(...additionalItems);
          $state.loaded();
        } else {
          $state.complete();
        }
      }, 500);
    },
  },
};
</script>
