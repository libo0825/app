<template>
    <div class="h1">
        <h1>这是{{username}}的博客管理</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: ""
        }
    },
    mounted() {
        this.username = sessionStorage.getItem("username")
    }
}
</script>

<style>
.h1 {
    position: relative;
}

h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 50px;
    transform: translate(-50%, -50%);
    color:orangered;
}
</style>
