<template>
  <div class="box">
    <input type="text" v-model='name'><span>账号</span>
    <input type="password" v-model='password'><span>密码</span><br>
    <button @click='login'>登录</button>
    <button>注册</button>
  </div>
</template>

<script>
export default{
  data(){
    return{
        name:'',
        password:''
    }
  },
  methods:{
    
    login(){
      this.axios({
        url:'http://localhost:8080/login',
        method:'POST',
        data:{
          name:this.name,
          password:this.password
        }
      }).then((res)=>{
        console.log(res.data)
        if(res.data.status==0){
            console.log('账号不存在')
        }else if(res.data.status==1){
          console.log('登录成功')
          window.location.href='http://localhost:8080/home'
        }else{
          console.log('密码错误')
        }
      })
    }
  }
}
</script>

<style scoped>
.box{
  width: 300px;
  height: 200px;
  margin:100px auto;
  border: 1px solid #000;
}
.box input,.box button{
  margin-top: 20px;
  border: 1px solid #000;
  margin-left: 30px;
}
</style>