<script>
import Vue from "vue";
export default {
    props: {
        title: {
            type: String,
        },
    },
    render: function (h) {
        const newClass = `flex justify-center font-title text-bold text-center text-3xl pt-4 pb-10`;

        return h("div", { class: newClass, id: "heading-1" }, this.title);
    },
};
</script>
