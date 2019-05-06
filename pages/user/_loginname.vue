<template>
    <div id="main">
        <el-card class="box-card">
            <h2>{{userInfo.loginname}}</h2>
            <img :alt="userInfo.loginname" :src="userInfo.avatar_url">
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'user-detail',
        asyncData({ app, params }) {
            console.log(params)
            return app.$axios
                .$get(`/user/${params.loginname}`)
                .then(res => {
                    return { userInfo: res.data }
                })
                .catch(err => {
                    console.log('axios.get failed.')
                    console.error(err)
                })
        }
    }
</script>

<style scoped>
</style>
