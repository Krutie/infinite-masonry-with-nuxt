<template>
    <svg
        :class="`fill-current text-${color}`"
        style="border-radius: Calc(1.5rem - 5px);"
        viewBox="0 0 340 379"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 0H340V327.073C323 358.384 50.5005 398.434 0 368.362V0Z" />
    </svg>
</template>
<script>
export default {
    props: ["color"],
};
</script>
<style>
svg {
    height: 100%;
    width: 100%;
}
</style>
