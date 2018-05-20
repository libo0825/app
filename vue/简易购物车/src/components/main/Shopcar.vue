<template>
<div class="main">
  <div class="main_top">
    <div v-for='(item,ind) in data' :key='ind'>
      <div class="list">
        <div class="list_input"><input type="checkbox"  :checked='item.flag' @click='()=>{click_one(ind)}'></div>
        <div v-text='item.title' class="list_title"></div>
        <div class="list_img"> <img :src="item.img" alt=""></div>
        <div v-text='item.price' class="list_price"></div>
        <div class="list_calculator">
          <button class="calculator_cutDown" @click='()=>{cutDown(ind)}'>-</button>
          <input type="text" class="calculator_input" v-model='item.count'>
          <button class="calculator_add" @click='()=>{add(ind)}'>+</button>
        </div>
      </div>
    </div>
  </div>
  <div class="main_bottom">
    <div class="list_input"><input type="checkbox"  :checked='flg' @click='(e)=>{all(e)}'></div>
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
import { mapState, mapActions } from "vuex";

export default {
  created() {
    //判断路由有没有传过来数据，没有就自己请求数据
    if (this.$route.params.data) {
      this.getdata(this.$route.params.data);
    } else {
      this.axios.post("/mock").then(data => {
        this.getdata(data.data);
      });
    }
  },
  computed: {
    ...mapState(["data", "price", "count", "flg"])
  },
  methods: {
    ...mapActions(["getData", "addCount", "lessenCount", "click", "allClick"]),
    getdata(data) {
      this.getData(data);
    },
    add(ind) {
      this.addCount(ind);
    },
    cutDown(ind) {
      this.lessenCount(ind);
    },
    click_one(ind) {
      this.click(ind);
    },
    all(e) {
      this.allClick(e.target.checked);
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
}
.main_top{
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  overflow-y:scroll
}
.main_bottom {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #000;
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
}
.main_bottom .right {
  width: 90%;
  display: flex;
  justify-content: space-around;
}
.list {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 0;
}
.list_input {
  width: 10%;
  text-align: center;
}
.list_title {
  width: 30%;
  padding: 5px;
}
.list_img {
  width: 20%;
  height: 70px;
}
.list_img img {
  width: 100%;
  height: 100%;
}
.list_price {
  width: 10%;
  text-align: center;
}
.list_calculator {
  width: 30%;
  display: flex;
  align-items: center;
}
.calculator_cutDown,
.calculator_add {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.calculator_input {
  width: 30px;
  height: 25px;
  text-align: center;
}
</style>
