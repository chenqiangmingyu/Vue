import u from 'underscore';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import store from './vuex/store';
import {configRouter} from './route.config';

require('es6-promise').polyfill();

// resource
Vue.use(VueResource);

// Vue.http.options.root = '/root';
// Vue.http.options.emulateJSON = true;
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateHTTP = true;

// router
Vue.use(VueRouter);

const router = new VueRouter({
    history: true,
    saveScrollPosition: true
});

configRouter(router);

// App 这个component应该是一个骨架型的，包括一些导航和头部公共样式之类
const entryApp = Vue.extend(u.extend(App, {store}));

router.start(entryApp, '#app');
