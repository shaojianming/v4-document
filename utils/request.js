const axios = require('axios')

// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // url = base url + request url
  timeout: 100000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
// service.interceptors.response.use(
//   response => response,
//   error => {
//     return Promise.reject(error);
//   })


service.interceptors.response.use(
    (response) => {
        const res = response.data
        const { code, total, data } = res
        const message = res.msg || res.message ||res.description|| '后端接口返回异常'
        console.log(res)
        return res;
    },
    (error) => {
        return Promise.reject(error)
    }
)


module.exports = service
