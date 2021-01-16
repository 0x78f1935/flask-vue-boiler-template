<template>
    <div class="home">
        <ExampleWidget msg="Hello From the test page!"/>
    </div>
</template>

<script>
    import ExampleWidget from '../widgets/exampleWidget.vue';

    export default {
        name: 'test',
        components: {
            ExampleWidget
        }
    }
</script>