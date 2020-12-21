<script>
import Vue from "vue";
export default {
    props: {
        src: {
            type: String,
        },
        gutter: {
            type: Boolean,
            default: false,
        },
        sharp: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        hasImage() {
            return this.src;
        },
    },
    render: function (h) {
        // Wrapper DIV
        let padding = this.gutter ? `p-${this.$parent.padding}` : "";
        const newClass = `w-full pb-2 ${padding}`;

        // Image tag
        let attrs = {
            src: this.src,
        };
        const sharp = this.sharp
            ? ""
            : `rounded-${this.$parent.borderRadius}-inner mx-auto`;
        const img = h("img", { attrs: attrs, class: sharp });

        // Render if image source is found
        if (this.hasImage) {
            return h("div", { class: newClass, id: "card-image" }, [img]);
        } else {
            return;
        }
    },
};
</script>
