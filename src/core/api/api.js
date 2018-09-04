import Vue from 'vue'
import request from "./config/http.js"
import params from "./config/params.js"




const url1 = '/mobile/api/tradition';


const apis = {
  test() {
    return request({
      url: url1,
      method: 'post',
      data: {
        m: 'getDynastyWall',
        studentId: params.studentId,
        token: params.token,
        activityId: params.activityId,
        classId: params.classId
      }
    })
  },
  testFGet() {
    return request({
      url: "/yp/information/rest/getHisInfo",
      method: 'get',
      params: {
        schoolId: '557d952a0cf2f3668d0b7220'
      }
    })
  }

}




export default {
  install() {
    Vue.prototype.$api = apis
  }
}
