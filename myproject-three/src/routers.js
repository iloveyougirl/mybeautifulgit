import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Model from './components/model'


const router = new VueRouter(); //这里可以带有路由器的配置参数
router.map({
    '/': {
        component:Model
    }
});
export default router; //将路由器导出

