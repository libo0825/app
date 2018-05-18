<template>
  <div class="app">
      <div class='header'>
          XX商城
      </div>
      <div class='section'>
          <router-view></router-view>
      </div>
      
      <div class="footer">
          <router-link to="/home" active-class='active'>主页</router-link>
          <router-link to='/detail' active-class='active'>详情</router-link>
          <router-link :to="{name:'shopcar',params:{data:data}}"  active-class='active'>购物车</router-link>
          <router-link to='/personal' active-class='active'>个人</router-link>
      </div>
      
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    created(){
        this.axios.post('/mock').then(data=>{
            this.fn(data.data)
            
        })
    },
    computed:{
        ...mapState(['data'])
    },
    methods:{
        ...mapActions(['getData']),
        fn(data){
            this.getData(data)
        }
    }
    
    
};
</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column
}
.footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #000;
 
  height: 40px;
  line-height: 40px;
}
.footer a{
    width: 25%;
    outline: 1px solid #000;
    text-align: center;
}
.active{
    color:#f00
}
.header{
    height: 40px;
    line-height:40px;
    border-bottom: 1px solid #000;
    text-align: center;
}
.section{
    flex:1;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100%;
}
</style>