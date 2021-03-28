<script>
import Vue from "vue";
export default {
    props: {
        /**
         * Provide the padding to the component
         */
        padding: {
            type: Number,
            default: 0,
        },
        /**
         * Provide primary color
         */
        primaryColor: {
            type: String,
            default: "gray-100",
        },
        /**
         * Provide secondary color
         */
        secondaryColor: {
            type: String,
            default: "gray-100",
        },
        /**
         * Provide card background color
         */
        cardBg: {
            type: String,
            default: "gray-100",
        },
        /**
         * Provide border width
         */
        borderWidth: {
            type: Number,
            default: 0,
        },
        /**
         * Provide border radius
         */
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
    render: function(h) {
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
