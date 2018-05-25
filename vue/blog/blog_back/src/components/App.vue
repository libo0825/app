<template>
    <div id="App">
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
}

a {
    text-decoration: none;
    color: #000;
}

ul li,
ol li {
    list-style: none;
}

i,
em {
    font-style: normal;
}

b,
strong {
    font-weight: normal;
}

i {
    text-decoration: none;
}

html,
body,
#App {
    width: 100%;
    height: 100%;
}

#App {
    background-image: url(../static/login_bg.jpg);
    background-size: 100% 100%;
}
</style>
