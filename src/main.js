// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/js/flexible'
// body样式通用引入失效
import "./assets/css/reset.scss"
// MintUI  import
import {Button} from 'mint-ui'
Vue.component(Button.name, Button)

// 注册全局请求
import VueWechatTitle from 'vue-wechat-title'//动态获取title
Vue.use(VueWechatTitle)
import api from './core/api/api'
Vue.use(api)
//注册全局通用属性,方法
import global from './core/global/global'

Vue.use(global)

// import directive from './core/directive/directive'
// Vue.use(directive)

import native from './core/native/native'
Vue.use(native)



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

