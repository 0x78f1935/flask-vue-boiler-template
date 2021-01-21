<template>
    <v-app>
        <v-navigation-drawer app permanent expand-on-hover dark>
            <Drawer/>
        </v-navigation-drawer>

        <v-app-bar app>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <Title msg="Hello from the test page!"/>
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
    import Title from '../widgets/title.vue';
    import Drawer from '../components/drawer.vue';

    export default {
        name: 'test',
        components: {
            Title,
            Drawer
        }
    }
</script>