<template>
    <svg
        :class="`fill-current text-${color}`"
        style="border-radius: Calc(1.5rem - 5px);"
        fill="none"
        x="0px"
        y="0px"
        viewBox="0 0 340 479"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M340 0H0V446.083C81.7469 499.586 317.979 479.188 340 446.083V0Z"
        />
    </svg>
</template>
<script>
export default {
    props: ["color"],
};
</script>
