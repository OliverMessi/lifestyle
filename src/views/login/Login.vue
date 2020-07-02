<template>
    <body id="login">
    <el-form class="login-container">
        <h3 class="login_title">系统登录</h3>
        <el-form-item>
            <el-input v-model="loginForm.userName" placeholder="请输入用户名" type="text" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="loginForm.passWord" placeholder="请输入密码" type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login()" style="width: 100%">登录</el-button>
        </el-form-item>

    </el-form>
    </body>

</template>

<script>
    import {login} from "network/login"

    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    userName: "",
                    passWord: ""
                }
            }
        },
        methods: {
            login() {
                login(this.loginForm.userName, this.loginForm.passWord).then(res => {
                    if (res.code === 200) {
                        this.$router.replace({path: '/home'})
                    }
                })
            }
        }
    }
</script>

<style scoped>
    #login {
        background: url("../../assets/bgy.jpg") no-repeat;
        background-position: center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
    }

    body {
        margin: 0px;
    }

    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 90px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .login_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
</style>