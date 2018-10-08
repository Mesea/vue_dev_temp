import global from '@/core/global/global.js'
var param = global.global.getParam();

// 获取url参数,在此配置
const params = {
  token: param.token || "test"
}
export default params;
