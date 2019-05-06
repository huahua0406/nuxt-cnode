//https://zh.nuxtjs.org/guide/vuex-store/#%E4%BD%BF%E7%94%A8%E7%8A%B6%E6%80%81%E6%A0%91

export const state = () => ({
    counter: 0
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}
