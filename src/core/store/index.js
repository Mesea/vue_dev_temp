import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import state from "./state.js"
import mutations from "./mutations.js"
import getters from "./getters.js"
import actions from "./actions.js"

export default  new Vuex.Store({
	// 属性
 	state,
 	//fn
   mutations,
  	//fn return
   getters,
   //fn ync
   actions
})