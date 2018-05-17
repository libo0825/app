<template>
<div>
  <div v-for='(item,ind) in data'>
    <div class="aa">
      <div class="ff"><input type="checkbox" class="f1" :checked='item.flag' @click='()=>{danji1(ind)}'></div>
      <div v-text='item.title' class="bb"></div>
      <div class="cc"> <img :src="item.img" alt=""></div>
      <div v-text='item.price' class="dd"></div>
      <div class="ee">
        <button class="e1" @click='()=>{del(ind)}'>-</button>
        <input type="text" class="e3" v-model='item.count'>
        <button class="e2" @click='()=>{add(ind)}'>+</button>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="ff"><input type="checkbox" class="f1" :checked='flg' @click='(e)=>{quan(e)}'></div>
    <div class='right'>
        <span>全选</span>
        <span>总价：</span>
        <span>{{price}}</span>
        <span>总数量：</span>
        <span>{{count}}</span>
    </div>
  </div>
</div>
 
</template>

<script>
import {mapState,mapActions} from 'vuex';
console.log(mapState)
export default {
  
  created(){
    this.axios.get('/mock').then((res)=>{
      this.fn(res.data)
    })
  },
  computed:{
    ...mapState(['data','price','count','flg'])

  },
  methods:{
    ...mapActions(['getData','addcount','delcount','danji','quanX']),
    fn(data){
      this.getData(data)
    },
    add(ind){
      this.addcount(ind)
    },
    del(ind){
      this.delcount(ind)
    },
    danji1(ind){
      this.danji(ind)
    },
    quan(e){
      this.quanX(e.target.checked)
    }
  }
}
</script>

<style scoped>
.footer{
  display: flex;
}
.footer .right{
  width: 90%;
  display: flex;
  justify-content: space-around;
}
.aa{
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 0;
  }
  .ff{
    width: 10%;
    text-align: center;
  }
  .bb{
    width: 30%;
    padding: 5px;
  }
  .cc{
    width: 20%;
    height: 70px;
  }
  .cc img{
    width: 100%;
    height: 100%;
  }
  .dd{
    width: 10%;
    text-align: center;

  }
  .ee{
    width: 30%;
    display: flex;
    align-items: center;

  }
  .e1,.e2{
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  .e3{
    width: 30px;
    height: 25px;
    text-align: center;
  }
</style>
