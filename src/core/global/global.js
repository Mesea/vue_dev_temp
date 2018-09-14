import Vue from 'vue'
import params from "@/core/api/config/params"



var global = {
// 版本判断方法
  udgeAppVersion(sval, nval) {
  if (!nval) return;
  var s = sval.split(".");
  var n = nval.split(".");
  for (var i = 0; i < n.length; i++) {
    n[i] = parseInt(n[i]);
  }
  for (var i = 0; i < n.length; i++) {
    s[i] = parseInt(s[i]);
  }
  if (s[0] > n[0]) {
    return false;
  } else if (s[0] < n[0]) {
    return true;
  } else {
    if (s[1] > n[1]) {
      return false;
    } else if (s[1] < n[1]) {
      return true;
    } else {
      if (s[2] > n[2]) {
        return false;
      } else if (s[2] <= n[2]) {
        return true;
      }
    }
  }
},
// 获取url参数返回json
  params,
  isAndroid() { //判断是否是安卓
    var agent = navigator.userAgent;
    return agent.indexOf('Android') > -1 || agent.indexOf('Adr') > -1;
  }
}





// 注册插件全局通用
export default {
  install() {
    Vue.prototype.$global = global;
  },
  global
}
