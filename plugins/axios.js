export default function ({ $axios, redirect }) {
   // 基本配置
   //  $axios.defaults.timeout = 10000
   //  $axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 请求回调
  $axios.onRequest(config => {
    console.log('Making request to 【' + config.url + '】')
  })

  // 返回回调
  $axios.onResponse(res => {
    //   console.log(res);
  })

  // 错误回调
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/404')
    }
  })
}


