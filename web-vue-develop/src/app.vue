<template>
    <div>
        Hello World this Vue! {{$store.state.count}}
        <button @click="add">+</button>
        <router-link to="/">index</router-link>
        <router-link to="/a">/a</router-link>
        <router-link to="/b">/b</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import VueRouter from "vue-router"
import Vuex from "vuex"

import routerConfig from "./router"
let router = new VueRouter(routerConfig)

import storeConfig from "./store"
let store = new Vuex.Store(storeConfig)

export default {
    router,
    store,
    methods:{
        add(){
            this.$store.commit("increment")
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    color: red;
}
</style>