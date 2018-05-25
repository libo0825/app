<template>
  <div id="app">
      <div>
        <div v-for="(item,index) in list">
          <component1 :data='list' :item="item" :ind="index"></component1>
        </div>
      </div>
      <component2></component2>
      
  </div>
</template>

<script>
import component1 from '@/components/component1'
import component2 from '@/components/component2'
export default {
  data(){
    return {
      list:[]
    }
  },
  components:{
    component1,
    component2
  },
  created(){
    this.axios({
      url:'http://localhost:8080/mock',
      methods:'GET'
    }).then((res)=>{
      this.list=res.data
    })
  }
}
</script>

<style>

</style>
