import pkg from './package'
// https://github.com/ElemeFE/element/issues/15261
// global.HTMLElement = typeof window === 'undefined' ? Object : window.HTMLElement
export default {
    mode: 'universal',
    // server: {
    //     port: 3001, // default: 3000
    //     host: '0.0.0.0', // default: localhost
    // },
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
    // 全局 CSS https://zh.nuxtjs.org/examples/global-css
    css: [
        '~/css/main.css'
    ],

    /*
     ** Customize the progress-bar color
     */
    // 颜色条
    loading: { color: '#409eff' },
    // 自定义loading
    // loading: '~/components/loading.vue',
    /*
     ** Global CSS
     */
    css: ['element-ui/lib/theme-chalk/index.css'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/element-ui',
        // https://axios.nuxtjs.org/extend
        '~/plugins/axios'
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // https://axios.nuxtjs.org/setup
        '@nuxtjs/axios'
    ],

    axios: {
        //开发模式下开启debug
        // debug: process.env._ENV == "production" ? false : true,
        baseURL: 'https://cnodejs.org/api/v1', // baseURL
        // proxy: false, // 表示开启代理
        // prefix: '/api/v2', // 开启代理前缀
        // credentials: true // 表示跨域请求时是否需要使用凭证
    },

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
