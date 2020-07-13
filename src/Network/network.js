"use strict";

import axios from "axios";

// const BaseURL = "http://dearsan.top/doggie/";
const BaseURL = "http://39.99.129.48:80/doggie/";

//基础配置
axios.defaults.baseURL = BaseURL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.timeout = 10000;

var getPathByAction = function (action) {
  switch (action) {
    case 'userInfo':
      return 'sansan/user/';
    default:
      return '';
   }
}

var getURLByPath = function (path) {
  return BaseURL + path
}

var requestURL = function (action) {
  return getURLByPath(getPathByAction(action))
}

//添加请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  }
);

function checkStatus(response) {
  return new Promise((resolve, reject) => {
    if (
      response &&
      (response.status === 200 ||
        response.status === 304 ||
        response.status === 400)
    ) {
      resolve(response.data);
    } else {
      reject({
        state: "0",
        message: "网络异常"
      });
    }
  });
}

export default {
    post(action, params) {
      return axios({
        method: "post",
        url: requestURL(action),
        data: params
      }).then(response => {
        return checkStatus(response);
      });
    },
    get(action, params) {
      params = qs.stringify(params);
      return axios({
        method: "get",
        url: requestURL(action),
        data: params
      }).then(response => {
        return checkStatus(response);
      });
    }
}
