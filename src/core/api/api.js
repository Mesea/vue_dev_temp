import Vue from 'vue'
import request from "./config/http.js"
import params from "./config/params.js"
const url1 = '/mobile/api/yp';
const apis = {
  logon(data) {
    console.log(data);
    return request({
      url: url1,
      method: 'post',
      data: {
        m: 'login',
        mobile:data.mobile,
        password:data.password
      }
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
