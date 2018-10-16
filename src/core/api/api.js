import Vue from 'vue'
import request from "./config/http.js"
import params from "./config/params.js"
const url1 = '/activityfilm/art/activity/test';


const apis = {
  logon(data) {
    return request({
      url: url1,
      method: 'post',
      jsonString:true,
      data
    })
  },
  logons(data) {
    return request({
      url: url1,
      method: 'get',
      params: {
        m: 'login',
        mobile:data.mobile,
        password:data.password
      }
    })
  },
}




export default {
  install() {
    Vue.prototype.$api = apis
  }
}
