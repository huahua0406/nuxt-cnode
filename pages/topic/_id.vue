<template>
    <div class="container topic-detail">
        <el-card class="box-card">
            <div class="topic-header">
                <span class="title">{{detail.title}}</span>
                <div class="changes">
                    发布于：{{detail.create_at.replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')}} &nbsp;作者:
                    <nuxt-link :to="'/user/'+ detail.author.loginname">{{detail.author.loginname}}</nuxt-link>
                </div>
            </div>
            <div class="topic-content" v-html="detail.content"></div>
        </el-card>
    </div>
</template>

<script>
    export default {
        asyncData({ app, params }) {
            console.log(params)
            // 根据不用的标签获取不同的数据，最后返回话题列表。
            return app.$axios
                .$get(`/topic/${params.id}`)
                .then(res => {
                    return { detail: res.data }
                })
                .catch(err => {
                    console.log('axios.get failed.')
                    console.error(err)
                })
        }
    }
</script>

<style scoped>
    .topic-header {
        padding: 10px;
        background-color: #ffff;
        border-radius: 3px 3px 0 0;
    }
    .topic-header .title {
        font-size: 22px;
        font-weight: 700;
        margin: 8px 0;
        display: inline-block;
        vertical-align: bottom;
        width: 75%;
        line-height: 130%;
    }
    .topic-header .changes {
        font-size: 12px;
        color: #838383;
    }
    .topic-content {
        padding: 10px;
        border-top: 1px solid #e5e5e5;
    }
    .topic-content h2 {
        font-size: 26px;
        line-height: 40px;
        margin: 30px 0 15px;
        border-bottom: 1px solid #eee;
    }
    .topic-content p {
        font-size: 15px;
        line-height: 1.7em;
        overflow: auto;
    }
    .topic-content li {
        line-height: 2em;
    }
</style>
