import Vue from 'vue'
import axios from 'axios';
// 配置代理
const baseURL = (location.host.indexOf(".com") != -1 || location.host.indexOf(".net") != -1) ? "" : "/apis";

let ajaxconfig = {
  // 基础url前缀
  baseURL,

  //设置超时时间
  timeout: 300000,
  //返回数据类型
  responseType: 'json', // default
  //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
  url: '/',

  // 请求方法同上
  method: 'get', // default

  transformRequest: [function(data) {
    // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
    //data = axios.stringify(data);
    //console.log("data",typeof data,data)
    //console.log(data.method)
    return data;
  }],

  transformResponse: [function(data) {
    // 这里提前处理返回的数据
    if (typeof data == 'string') {
      data = JSON.parse(data);
    }
    return data;
  }],

  // 请求头信息
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded', //application/json application/x-www-form-urlencoded
    'Token': ''
  },

  //parameter参数
  params: {},

  //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
  data: {},

  withCredentials: true //当我们把此配置项设置成默认配置项并且设置成true的时候，axios就可以设置cookies了。
};

let instance = axios.create(ajaxconfig);

//请求列表数据

/* 
   axios 请求方式
   
   axios.request(config)

   axios.get(url[, config])

   axios.delete(url[, config])

   axios.head(url[, config])

   axios.post(url[, data[, config]])

   axios.put(url[, data[, config]])

   axios.patch(url[, data[, config]])
 */
function queryData(options) {
  //必须基本设置请求参数
  let url = options.url || '';
  let method = options.method || ajaxconfig.method; //"get" "post"  "put" ，默认请求get

  let isParseStringJSON = options['jsonString'];

  //扩展基本配置项
  let myConfig = options.baseConfing || {}; //{}

  let config = _.defaultsDeep({}, myConfig);
  config.method = method;
  //获取服务端数据
  if (method == 'post' || method == 'put' || method == 'patch') {

    //POST提交数据时必选参数
    let potsData = options.data || {}; //{firstName: 'Fred',lastName: 'FlintStone'}
    if (_.isObject(potsData)) {
      if (typeof isParseStringJSON != 'undefined') {
        setAjaxQuestHeader('Content-Type', 'application/json');
        potsData = JSON.stringify(potsData);
        console.log(potsData);
      } else {
        setAjaxQuestHeader('Content-Type', 'application/x-www-form-urlencoded');
        potsData = serializeParams(potsData);
      }
    }
    return instance[method].bind(instance, url, potsData, config);
  } else {
    //GET提交数据时必选参数
    let myParams = options.params || {}; //{params: {ID: 12345}} || '/user?ID=12345'
    myParams = Object.assign({}, myParams, {
      mathRand: Math.random() * 100000000000000000
    });
    config.params = myParams;
    // if(method=="delete"){
    //   instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    // }
    return instance[method].bind(instance, url, config);
  }
}

//JSON序列化传入参数形式
function serializeParams(params, type) {
  if (!params) return;
  let obj = {};
  if (type == 'JSON') {
    if (!_.isString(params)) return;
    if (params.indexOf('&') > -1) {
      let splits = params.split('&');
      splits.forEach(function(v, k) {
        let key = v.split('=')[0] || k;
        let val = v.split('=')[1] || undefined;
        obj[key] = val;
      });
      return obj;
    }
  } else {
    if (!_.isObject(params)) {
      if (!_.isObject(JSON.parse(params))) {
        return;
      } else {
        params = JSON.parse(params);
      }
    }
    obj = [];
    _.forEach(params, function(v, k) {
      v = !v ? '' : v;
      let val = k + '=' + v;
      obj.push(val);
    });
    return obj.join('&');
  }
}

//请求前改变请求头源参数
function setAjaxQuestHeader(key, v) {
  ajaxconfig['headers'][key] = v;
  instance = axios.create(ajaxconfig);
}

let ajax = function(option) {
  return queryData(option)();
};

/*
 例:
 ajax({
        url:'请求地址',
        method:'请求方法',
        data:{请求方法为post、put、patch时传的参数},
        params:{请求方法为get时传的参数},
        jsonString:true|false(是否传json),
        baseConfing:{其他配置项，见axios文档}
       }).then(res=>{
          // 请求成功
          // res.data是服务器返回的数据
       }).catch(e=>{
          // 请求失败
       })
 */



export default ajax;