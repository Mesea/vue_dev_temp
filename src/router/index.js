import Vue from 'vue'
import Router from 'vue-router'
import global from '@/core/global/global.js'
const param = global.global.getParam();


Vue.use(Router)

const constantRouterMap = [
{
    path: '/culture',
    name: 'culture',
    component: resolve => require(['@/views/home'], resolve),
    meta: {
      title: '传统文化传承人'
    },
    children: [
      {
        path: 'index',
        component: () =>
          import ('@/views/culture/index'),
        meta: {
          title: 'yeyeye'
        },
      },
      {
        path: 'list',
        component: () =>
          import ('@/views/culture/list'),
        meta: {
          title: 'hahaha'
        },
      }
    ]
  },

  {
    path: '/testpath',
    name: 'testpath',
    component: resolve => require(['@/views/home'], resolve),
    meta: {
      title: '测试路由'
    },
    children: [
      {
        path: 'index',
        component: () =>
          import ('@/views/testpath/index'),
        meta: {
          title: '测试index'
        },
      },
      {
        path: 'list',
        component: () =>
          import ('@/views/testpath/list'),
        meta: {
          title: '测试list'
        },
      }
    ]
  },

];


const router = new Router({
  routes: constantRouterMap
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
