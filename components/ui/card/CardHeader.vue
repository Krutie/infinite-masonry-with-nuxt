<script>
import Vue from "vue";
export default {
  props: {
    center: {
      type: Boolean,
      default: false,
    },
  },
  render: function (h) {
    let roundedHeader = `text-sm border-0 rounded-t-none rounded-${this.$parent.borderRadius}-inner`;

    let contentAlign = this.center
      ? `flex items-center justify-center text-center`
      : `flex items-center justify-between`;

    const newClass = `${roundedHeader} ${contentAlign} font-sans p-${this.$parent.padding}`;

    return h(
      "div",
      {
        class: newClass,
      },
      this.$slots.default
    );
  },
};
</script>
