<template>
  <div id="menger">
    <xhead></xhead>
    <div class="main">
      <xaside class="left"></xaside>
      <router-view class="right"></router-view>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {

    }
  },
  methods: {

  }

}
</script>

<style scoped>
#menger {
  width: 100%;
  background: #fff;
  height: 100%;
}

.main {
  overflow: hidden;
  width: 100%;
  height: 95%;
  display: flex;
}

.main .left {
  height: 100%;
}

.main .right {
  flex:1;
  height: 100%;
  overflow-y: scroll;
}
</style>
