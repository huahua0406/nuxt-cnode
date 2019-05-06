<template>
    <div id="app">
        <!-- 公共头部组件 -->
        <header class="header">
            <div class="header-inner">
                <div class="header-container">
                    <a class="logo" href="/?tab=all">
                        <img alt="logo" src="//static2.cnodejs.org/public/images/cnodejs_light.svg">
                    </a>
                    <ul class="nav">
                        <li :class="nav.path===$store.state.tab?'active':''" :key="nav.path" v-for="nav in tabs">
                            <nuxt-link :to="'/?tab='+nav.path" role="button">{{nav.name}}</nuxt-link>
                            <!-- nuxt-link 走路由，只在client处理，要走server可以改为 <a :href="/test?tab=xxx">test</a> -->
                            <!-- <a :href="'/?tab='+nav.path">{{nav.name}}</a> -->
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
                ]
            }
        },
        watch: {
            $route: function() {
                // console.log('tab has changed.')
                this.$store.commit('changeTab', this.$route.query.tab)
            }
        }
    }
</script>

<style scoped>
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

    .header-inner .header-container {
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
    .nav > li.active > a {
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
</style>
