  
<template>
    <div class="home">
        <ExampleWidget msg="Flask Vue Boiler Template"/>
    </div>
</template>

<script>
    import ExampleWidget from '../widgets/exampleWidget.vue';

    export default {
        name: 'home',
        components: {
            ExampleWidget
        }
    }
</script>