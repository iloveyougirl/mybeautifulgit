import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Hello from './components/Hello'
import Hello2 from './components/Hello2'

const router = new VueRouter(); //这里可以带有路由器的配置参数
router.map({
    '/index': {
        component:Hello
    },
    '/comp': {
        component:Hello2
    }
});
export default router; //将路由器导出

