import Vue from 'vue'
import Router from 'vue-router'
// import global from '@/core/global/global.js'
// const param = global.global.getParam();
Vue.use(Router)
const routes = [
{
    path: '/culture',
    component: resolve => require(['@/components/home'], resolve),
    meta: {
      title: '传统文化传承人',
    },
    children: [
      {
        path: 'index',
        component: () =>
          import ('@/components/culture/index'),
        meta: {
          title: '我是首页',
        },
      },
      {
        path: 'list',
        component: () =>
          import ('@/components/culture/list'),
        meta: {
          title: '我是列表页'
        },
      }
    ]
  }
];


const router = new Router({
  routes,
})





router.beforeEach((to, from, next) => {
  // if (to.path == "/") {
  //   if(param.userType=="parent"){
  //      next({ path: '/culture.index' });
  //    }else if(param.userType=="teacher"){
  //       next({ path: '/culture.statistics' });
  //    }
  // } else {
  //   next();
  // }
  next();
})
export default router;
