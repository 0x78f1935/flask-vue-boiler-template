<template>
    <v-app>
        <v-navigation-drawer app permanent expand-on-hover dark>
            <Drawer/>
        </v-navigation-drawer>

        <v-app-bar app>
            <!-- -->
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main class="ma-0 pa-0">

            <!-- Provides the application the proper gutter -->
            <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
                <v-row align="center" justify="center">
                    <v-col class="text-center" cols="12">
                        <Title msg="Flask Vue Boiler Template"/>
                        <h4 class="subheading">Build your application today!</h4>
                    </v-col>
                </v-row>
            </v-parallax>
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
        name: 'home',
        components: {
            Title,
            Drawer
        }
    }
</script>