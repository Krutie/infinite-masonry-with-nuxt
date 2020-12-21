<template>
    <div
        :class="`${wrapperClass} ${roundedFooter} ${alignContent} ${invertClass} text-${fontColor}`"
    >
        <span v-if="name" :class="`${nameSpan}`">
            {{ name }}
        </span>
        <div v-if="category" :class="`${categorySpan}`">{{ category }}</div>
    </div>
</template>
<script>
export default {
    props: {
        // Content related props
        name: {
            type: String,
        },
        category: {
            type: String,
        },
        // Style related props
        fontColor: {
            type: String,
            default: "white",
        },
        left: {
            type: Boolean,
            default: false,
        },
        invert: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            wrapperClass: `p-${this.$parent.padding}
            flex flex-col justify-center`,
            nameSpan: "text-md font-display uppercase",
            categorySpan: "font-sans text-sm",
        };
    },
    computed: {
        alignContent() {
            return this.left ? "text-left" : "text-center";
        },
        roundedFooter() {
            return `border-0 rounded-b-none rounded-${this.$parent.borderRadius}-inner border-top-${this.$parent.primaryColor}`;
        },

        invertClass() {
            return this.invert
                ? `bg-${this.$parent.primaryColor}`
                : `text-${this.$parent.primaryColor}`;
        },
    },
};
</script>
