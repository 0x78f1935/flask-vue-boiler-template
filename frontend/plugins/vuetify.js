import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

const opts = {
    theme: {dark: true},
    icons: {
        iconfont: 'md',
    },
}

export default new Vuetify(opts)