<script>
import Vue from "vue";
export default {
    props: {
        title: {
            type: String,
        },
    },
    render: function (h) {
        const newClass = `text-bold text-center text-2xl py-10`;

        return h("div", { class: newClass, id: "heading-2" }, this.title);
    },
};
</script>
