<template>
    <div>
        Hello World this Vue! {{count}}
        <button @click="add">+</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            count: 1
        }
    },
    methods:{
        add(){
            this.count = this.count + 1
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    color: red;
}
</style>