---
title: 06-axios
date: 2018-05-03 10:57:37
tags: 前端-08-vue
categories: 前端-08-vue
---

## 版本1
main.js


```
import axios from 'axios'
Vue.prototype.$http = axios
```

其他地方使用的话 如同使用 vue-resource 一样


```
this.$http.get(URL).then(response => {
    // success callback
}, response => {
    // error callback
})
```



- [一些技巧](http://www.jb51.net/article/117599.htm)
- [POST发送的坑](https://www.jianshu.com/p/b22d03dfe006)

## 版本2 解决跨域

```
#创建一个axios实例

import Qs from 'qs'

var axios_instance = axios.create({
#config里面有这个transformRquest，这个选项会在发送参数前进行处理。
#这时候我们通过Qs.stringify转换为表单查询参数
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }],
    withCredentials:true,
#设置Content-Type
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
})
Vue.use(VueAxios, axios_instance)

作者：痞子达
链接：https://www.jianshu.com/p/b22d03dfe006
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

```
import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import Qs from 'qs'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  transformRequest: [function(data) {
    data = Qs.stringify(data)
    return data
  }],
  withCredentials: process.env.WithCredentials // 开发环境下跨域为true，生产环境为false（默认）
  // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  // timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

```
