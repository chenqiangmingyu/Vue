import Vue from 'vue';
import Vuex from 'vuex';

import hello from './reducers/hello';

Vue.use(Vuex);

Vue.config.debug = true;
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        hello
    },
    strict: debug
});
