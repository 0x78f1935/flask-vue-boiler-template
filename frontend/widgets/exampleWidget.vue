<template>
    <h2 class="text-center">{{this.$props.msg}}</h2>
</template>
<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>