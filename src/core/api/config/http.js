import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import { Toast, Indicator, MessageBox } from 'mint-ui'
import nativeBack from "@/core/native/native"

// console.dir(Vue)

// 创建axios实例

const proxy = location.host.indexOf(".com") != -1 ? "" : "/apis";

const service = axios.create({
  baseURL: location.origin + proxy,
  timeout: 15000,
  transformRequest: [function(data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret.slice(0,ret.length-1);
  }]
})


service.interceptors.request.use(
  config => {
    // token检查
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    Indicator.open();
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)



service.interceptors.response.use(
  response => {
    Indicator.close();
    return response
  },
  error => {
    Indicator.close();
    return Promise.reject(error)
  }
)





export default service;
