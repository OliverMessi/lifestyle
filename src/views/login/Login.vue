<template>
  <div>
    用户名：<input type="text" v-model="loginForm.userName" placeholder="请输入用户名"/>
    <br/>
    密码：<input type="password" v-model="loginForm.passWord" placeholder="请输入密码"/>
    <br/>
    <button @click="login()">登录</button>
  </div>
</template>

<script>
  import {login} from "network/login"
  export default {
    name: "Login",
    data(){
      return {
        loginForm:{
          userName:"",
          passWord:""
        }
      }
    },
    methods:{
      login(){
        login(this.loginForm.userName,this.loginForm.passWord).then(res=>{
          if (res.code === 200) {
            this.$router.replace({path: '/home'})
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>