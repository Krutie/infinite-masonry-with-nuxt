<template>
    <svg
        :class="`fill-current text-${color}`"
        style="border-radius: Calc(1.5rem - 5px);"
        viewBox="0 0 340 336"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        x="0px"
        y="0px"
    >
        <path
            d="M340 0H0V327.734C46.5792 350.132 134.678 319.696 221 321.708C267.559 322.793 330.526 338.197 340 327.734V0Z"
        />
    </svg>
</template>
<script>
export default {
    props: ["color"],
};
</script>
