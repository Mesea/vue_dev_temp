// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import _ from 'lodash'
import '@/assets/js/flexible'
// body样式通用引入失效
import "./assets/css/reset.scss"

// 动态设置title
Vue.use(require('vue-wechat-title'))

// 暴露全局请求方法
import api from './core/api/api'
Vue.use(api)
//注册全局通用属性,方法
import global from '@/core/global/global'
Vue.use(global)

// 原生交互方法
import native from '@/core/native/native'
Vue.use(native)

// 通用指令
import directive from '@/core/directive/directive'
Vue.use(directive)

// 通用组件配置
import tempConfig from '@/core/tempConfig/tempConfig'
Vue.use(tempConfig)


Vue.config.productionTip = false
import store from "@/core/store/index"
// import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
/* eslint-disable no-new */

 new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



