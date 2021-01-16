import Vue from 'vue/dist/vue.js';
import Router from './router.vue';
import router from './router';
import store from './store';

import './filters';

Vue.config.productionTip = false

new Vue({
    router,
    store,
    watch: {
        '$route' (to) {
            if(to.meta.MPA) {
                // Refresh page if MPA is set to True in router.js
                this.$router.go();
            }
       }
    },
    render: h => h(Router)
}).$mount('#app')