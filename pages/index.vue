<template>
    <section id="main">
        <el-card class="box-card">
            <div :key="topic.id" class="topic-item" v-for="topic in list">
                <p class="topic-info">
                    <span class="avatar">
                        <nuxt-link :to="'/user/'+ topic.author.loginname">
                            <img :alt="topic.author.loginname" :src="topic.author.avatar_url">
                        </nuxt-link>
                    </span>
                    <span class="replay-count">
                        <span class="count_of_replies" title="回复数">{{topic.reply_count}}</span><!--
                        --><span class="count_seperator">/</span><!--
                        --><span class="count_of_visits" title="点击数">{{topic.visit_count}}</span>
                    </span>
                    <el-tag size="small" type="success" v-if="topic.top">置顶</el-tag>
                    <el-tag size="small" v-else>{{topic.tab | tabtoName}}</el-tag>
                    <nuxt-link :to="{name: 'topic-id', params: {id: topic.id}}" class="topic-title">{{topic.title}}</nuxt-link>
                    <span class="last_active_time">最后回复：{{topic.last_reply_at.replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')}}</span>
                </p>
            </div>
            <el-pagination :total="1000" @current-change="handleCurrentChange" background layout="prev, pager, next" style="margin-top:10px"></el-pagination>
        </el-card>
    </section>
</template>

<script>
    // import Logo from '~/components/Logo.vue'

    export default {
        // components: {
        //     Logo
        // },
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
                page: 1,
                limit: 20,
                list: [],
                currentTab: '1211'
            }
        },
        filters: {
            tabtoName(val) {
                let mapValue = new Map()
                mapValue.set('good', '精华')
                mapValue.set('ask', '问答')
                mapValue.set('job', '招聘')
                mapValue.set('share', '分享')
                return mapValue.get(val)
            }
        },
        mounted() {
            // console.log('mounted');
            this.getData()
        },
        watch: {
            $route: function() {
                // console.log('$route has changed.')
                this.getData()
            }
        },
        head() {
            return {
                title: '首页  - ' + (this.$route.query.tab ? this.$route.query.tab : ''),
                meta: [
                    {
                        hid: 'index',
                        name: 'description',
                        content: 'CNode：Node.js专业中文社区'
                    }
                ]
            }
        },
        //请求:https://zh.nuxtjs.org/guide/async-data
        asyncData({ app, query }) {
            // console.log(query)
            // // 根据不用的标签获取不同的数据，最后返回话题列表。
            // return app.$axios.$get(`/topics?tab=${query.tab || 'all'}`).then(res => {
            //   return {list: res.data}
            // })
        },
        // https://zh.nuxtjs.org/api/pages-fetch/#fetch-%E6%96%B9%E6%B3%95
        fetch ({ store, params }) {
            // return axios.get('http://my-api/stars')
            // .then((res) => {
            //     store.commit('setStars', res.data)
            // })
        },
        methods: {
            getData() {
                this.$axios.$get(`/topics?tab=${this.$route.query.tab || 'all'}&page=${this.page}&limit=${this.limit}`).then(res => {
                    // return {list: res.data}
                    this.list = res.data
                })
            },
            handleCurrentChange(val) {
                console.log(val)
                this.page = val
                this.getData()
            }
        }
    }
</script>

<style>
    html {
        height: 100%;
    }
    body {
        height: 100%;
    }
    #__nuxt,
    #__layout,
    #app {
        height: 100%;
    }
    #main {
        width: 90%;
        max-width: 1400px;
        min-width: 960px;
        margin: 15px auto;
        min-height: 400px;
    }
    .topic-item {
        font-size: 14px;
        padding: 10px;
        border-bottom: 1px solid #f0f0f0;
    }
    .topic-info {
        display: flex;
        align-items: center;
    }
    .replay-count {
        display: inline-block;
        width: 75px;
        text-align: center;
    }
    .topic-title {
        padding: 0 5px;
        flex: 1;
    }
    .topic-title:hover {
        text-decoration: underline;
    }
    .avatar {
        display: inline-block;
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius: 3px;
    }
    img {
        max-width: 100%;
        height: auto;
    }
</style>
