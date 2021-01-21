<template>
    <v-card class="mx-auto" height="100vh">
        <v-list>
            <v-list-item class="px-2">
                    <v-badge avatar bordered overlap bottom>
                        <template v-slot:badge>
                            <v-avatar>
                                <v-img src="/static/img/sys_admin.png"></v-img>
                            </v-avatar>
                        </template>
                        <v-avatar size="40">
                            <v-img src="https://avatars.githubusercontent.com/u/14298262?s=460&u=73b4a175e1c7d77be68fb6be077df6e79961f12b&v=4"></v-img>
                        </v-avatar>
                    </v-badge>
            </v-list-item>

            <v-list-item link href="https://github.com/0x78f1935" target="_blank">
                <v-list-item-content>
                    <v-list-item-title class="title">Welcome</v-list-item-title>
                    <v-list-item-subtitle>0x78f1935</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
            <v-list-item link href="/">
                <v-list-item-icon>
                    <v-icon>dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
        
            <v-list-item link href="/test">
                <v-list-item-icon>
                    <v-icon>extension</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Testpage</v-list-item-title>
            </v-list-item>
            
            <v-list-item link href="https://github.com/0x78f1935" target="_blank">
                <v-list-item-icon>
                    <v-icon>star</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Github</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: 'drawer'
    }
</script>
