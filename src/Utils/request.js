import axios from 'axios'
import jsonBigInt from 'json-bigint'
import store from '@/store'

const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn',
  timeout: '7000'
})

// 处理id大数据
instance.defaults.transformResponse = [function (data) {
  try {
    return jsonBigInt.parse(data)
  } catch (error) {
    return data
  }
}
]

// 添加拦截器
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 判断token状态
  if (store.state.userTokenState) {
    config.headers.Authorization = `Bearer ${store.state.userTokenState.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data.data || response.data
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default instance
