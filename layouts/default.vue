<template>
    <div id="app">
        <!-- 公共头部组件 -->
        <header class="header">
            <div class="header-inner">
                <div class="container">
                    <a class="logo" href="/?tab=all">
                        <img alt="logo" src="//static2.cnodejs.org/public/images/cnodejs_light.svg">
                    </a>
                    <ul class="nav">
                        <li :key="nav.path" v-for="nav in tabs" :class="nav.path===currentTab?'active':''">
                            <nuxt-link :to="'/?tab='+nav.path" role="button">{{nav.name}}</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <!-- 路由视图，相当于router-view -->
        <nuxt/>
        <!-- 公共底部组件 -->
        <footer class="footer">
            <h2>footer</h2>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabs: [
                    {
                        name: '全部',
                        path: 'all'
                    },
                    {
                        name: '精华',
                        path: 'good'
                    },
                    {
                        name: '问答',
                        path: 'ask'
                    },
                    {
                        name: '招聘',
                        path: 'job'
                    },
                    {
                        name: '分享',
                        path: 'share'
                    }
                ],
                currentTab:this.$route.query.tab
            }
        },
        watch: {
            '$route': function() {
                // console.log('tab has changed.')
                this.currentTab = this.$route.query.tab
            }
        }
    }
</script>

<style>
    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;

        background-color: #e1e1e1;
        font-size: 14px;
        word-break: break-word;
        line-height: 20px;
        color: #333;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

    a {
        color: #08c;
        text-decoration: none;
    }

    .header {
        margin-bottom: 0;
        z-index: 9;
        width: 100%;
        position: relative;
        background: #444;
        font-size: 13px;
    }
    .header-inner {
        min-height: 50px;
        width: 90%;
        margin: auto;
        padding: 5px;
    }

    .header-inner .container {
        width: 100%;
        min-width: 960px;
        margin: 0 auto;
        max-width: 1400px;
    }

    .logo {
        display: block;
        float: left;
        width: 160px;
        padding: 3px 20px;
        height: 34px;
        line-height: 34px;
        font-size: 20px;
        color: #ccc;
        font-weight: 700;
        margin-left: -20px;
    }
    .logo img {
        vertical-align: initial;
    }
    .nav {
        float: left;
        margin-left: 10px;
        padding: 0;
    }
    .nav li {
        list-style: none;
        line-height: 20px;
        float: left;
    }
    .nav > li > a {
        display: block;
        padding: 10px 15px;
        color: #ccc;
        text-decoration: none;
    }
    .nav > li.active > a{
      background: #80bd01;
      color: #fff;
    }

    .footer {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #fff;
        text-align: center;
    }

    /* .button--green {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #3b8070;
        color: #3b8070;
        text-decoration: none;
        padding: 10px 30px;
    }

    .button--green:hover {
        color: #fff;
        background-color: #3b8070;
    }

    .button--grey {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #35495e;
        color: #35495e;
        text-decoration: none;
        padding: 10px 30px;
        margin-left: 15px;
    }

    .button--grey:hover {
        color: #fff;
        background-color: #35495e;
    } */
</style>
