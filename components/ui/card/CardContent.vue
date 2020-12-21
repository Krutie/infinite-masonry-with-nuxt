<script>
import Vue from "vue";
export default {
    props: {
        gradient: {
            type: Boolean,
            default: false,
        },
    },
    render: function (h) {
        let gradientStyle = this.gradient
            ? `bg-gradient-to-b from-dirtyBlue via-dirtyBluePink to-dirtyPink text-white`
            : ``;

        const newClass = `flex-1 p-${this.$parent.padding} ${gradientStyle}`;

        return h(
            "div",
            { class: newClass, id: "card-body" },
            this.$slots.default
        );
    },
};
</script>
