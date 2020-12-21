<script>
import Vue from "vue";
export default {
    props: {
        padding: {
            type: Number,
            default: 0,
        },
        primaryColor: {
            type: String,
            default: "gray-100",
        },
        secondaryColor: {
            type: String,
            default: "gray-300",
        },
        cardBg: {
            type: String,
            default: "gray-100",
        },
        borderWidth: {
            type: Number,
            default: 0,
        },
        borderRadius: {
            type: String,
            default: "lg",
        },
    },
    computed: {
        myClass() {
            return `shadow flex flex-col bg-${this.cardBg} border-${this.borderWidth} rounded-${this.borderRadius} border-${this.primaryColor} overflow-hidden`;
        },
    },
    render: function (h) {
        return h(
            "div",
            {
                class: this.myClass,
                props: this.$options.propsData,
            },
            [this.$slots.header, this.$slots.default, this.$slots.footer]
        );
    },
};
</script>
