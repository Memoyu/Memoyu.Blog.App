import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'https://localhost:44313' : 'https://localhost:44313',
  timeout: 10000
})

// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.state.token) {
    //   config.headers['Oauth-Token'] = getToken()
    // }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    // 0 为成功状态
    if (res.code !== 0) {
      //   // 90001 Session超时
      //   if (res.code === 90001) {
      //     return Promise.reject(new Error('error'))
      //   }

      //   // 20001 用户未登录
      //   if (res.code === 20001) {
      //     console.info('用户未登录')

      //     Message({
      //       type: 'warning',
      //       showClose: true,
      //       message: '未登录或登录超时，请重新登录哦'
      //     })

      //     return Promise.reject(new Error('error'))
      //   }

      //   // 70001 权限认证错误
      //   if (res.code === 70001) {
      //     console.info('权限认证错误')
      //     Message({
      //       type: 'warning',
      //       showClose: true,
      //       message: '你没有权限访问哦'
      //     })
      // return Promise.reject(new Error('error'))
      // }

      return Promise.reject(res.msg)
    } else {
      return response.data
    }
  },
  () => {
    store.commit('showSnackbar', '连接超时!')
    return Promise.reject(new Error('error'))
  }
)

export default service
