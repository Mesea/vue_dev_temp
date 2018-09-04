import Vue from 'vue'
var native = {
  setPath,
  initPageTitle
}

function setPath(_this, run) {
  // 传入this参数
  // 函数必须在全局注册
  var pageRoute = _this.$route.path;
  var back = "";
  // 拦截
  if (run == "tnt") {
    try { js_invoke.getBackAction(""); } catch (e) {}
    goBack = function() { return ""; }
    return;
  }
  if (run == "close") {
    try { js_invoke.getBackAction("close"); } catch (e) {}
    goBack = function() { return true; }
    return;
  }
  if (pageRoute == "/" || pageRoute.indexOf("culture.index") != -1) {
    back = 'close';
  } else if (pageRoute.indexOf("culture.answer") != -1) {
    back = "answerBack()";
  } else if (pageRoute.indexOf("culture.result") != -1) {
    back = "resultBack()"
  } else if (pageRoute.indexOf("culture.ruler") != -1) {
    back = "rulerBack()"
  }
  try { js_invoke.getBackAction(back); } catch (e) {}
  // ios逻辑(注意ios约定_调用goBack)
  goBack = function() {
    if (pageRoute == "/" || pageRoute.indexOf("culture.index") != -1) {
      return true;
    } else if (pageRoute.indexOf("culture.answer") != -1) {
      return "answerBack";
    } else if (pageRoute.indexOf("culture.result") != -1) {
      return "resultBack";
    } else if (pageRoute.indexOf("culture.ruler") != -1) {
      return "rulerBack";
    }
    return back;
  }
}

// 配置原生顶部title
function initPageTitle(title) {
  setTimeout(() => {
    var records = {
      name: title
    };
    try { js_invoke.getWebTitle(JSON.stringify(records)); } catch (e) {}

    retryToGetTitle=function(){
      console.log("我执行了IOS函数");
      console.log( 'getWebTitle('+JSON.stringify(records)+')');
        return 'getWebTitle('+JSON.stringify(records)+')';
    }
  }, 300);

}
export default {
  install() {
    Vue.prototype.$native = native;
  },
  native
}
