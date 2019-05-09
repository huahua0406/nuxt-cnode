import pkg from './package'
// https://github.com/ElemeFE/element/issues/15261
// global.HTMLElement = typeof window === 'undefined' ? Object : window.HTMLElement
export default {
    mode: 'universal',
    server: {
        port: 3100, // default: 3000
        host: '0.0.0.0', // default: localhost
    },
    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    // 进度条颜色
    // loading: { color: '#409eff' },
    /*
     ** Customize the progress-bar color
     */
    loading: '~/components/loading.vue',
    /*
     ** Global CSS
     ** https://zh.nuxtjs.org/examples/global-css
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '~/assets/css/global.css',
        '~assets/css/normailze.css'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/element-ui',
        '~/plugins/axios'
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios'  // https://axios.nuxtjs.org/setup
    ],

    axios: {
        //开发模式下开启debug
        // debug: process.env._ENV == "production" ? false : true,
        baseURL: 'https://cnodejs.org/api/v1', // baseURL
        // proxy: false, // 表示开启代理
        // prefix: '/api/v2', // 开启代理前缀
        // credentials: true // 表示跨域请求时是否需要使用凭证
    },
    // https://zh.nuxtjs.org/faq/http-proxy
    proxy: {
        '/api': {
            target: 'https://cnodejs.org/api/v1', // 代理地址
            changeOrigin: true, // 表示是否跨域
            pathRewrite: {
                '^/api': '/', // 把 /api 替换成 /
            }
        }
    },

    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],

        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        vendor: ['axios'] // 为防止重复打包
    }
}
