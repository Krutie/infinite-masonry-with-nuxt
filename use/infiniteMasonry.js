import { useContext, ref, useFetch } from "@nuxtjs/composition-api";

export default function infiniteMasonry(list) {
  const { $content } = useContext();

  const items = ref([]);
  const page = ref(0);

  function fetchData() {
    return $content(list.path)
      .limit(list.limit)
      .skip(list.limit * page.value)
      .sortBy("createdAt", "desc")
      .fetch();
  }

  useFetch(async () => {
    items.value = await fetchData();
  });

  function infiniteHandler($state) {
    setTimeout(async () => {
      page.value += 1;
      let additionalItems = await fetchData();

      if (additionalItems.length > 0) {
        items.value.push(...additionalItems);
        $state.loaded();
      } else {
        $state.complete();
      }
    }, 500);
  }

  return { items, infiniteHandler };
}
