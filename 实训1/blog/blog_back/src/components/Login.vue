<template>
    <div id="Login">
        <h2>个人博客：</h2>
        <p>
            <span>用户名:</span>
            <input type="text" placeholder="请输入用户名" v-input="username" v-model.lazy="username.value">
            <b></b>
        </p>
        <p>
            <span>密&nbsp;&nbsp;&nbsp;码:</span>
            <input type="password" placeholder="请输入密码" v-input="password" v-model.lazy="password.value">
            <b></b>
        </p>
        <div>
            <el-button @click="submit" type="warning">登录</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: {
                value: "",
                name: "username",
                flag: false
            },
            password: {
                value: "",
                name: "password",
                flag: false
            }
        };
    },
    methods: {
        submit() {
            this.axios.post("/api/back/user/login", {
                username: this.username.value,
                password: this.password.value
            }).then((data) => {
                if (this.username.flag && this.password.flag) {
                    switch (data.data.code) {
                        case "1001":
                            this.$message({
                                message: data.data.msg,
                                type: 'success'
                            });
                            sessionStorage.setItem("username", data.data.data.username)
                            this.$router.push("/back/main")
                            break;
                        case '1002':
                        case '1003':
                        case "1004":
                            this.$message.error(data.data.msg);
                            break;
                    }
                }
                else {
                    this.$message.error('请输入并保证正确！');
                }
            })
        }
    },
    directives: {
        input: {
            bind(el, binding) {
                function panduan(nam, flag, e) {
                    // 如果正则匹配
                    if (flag) {
                        e.nextElementSibling.innerHTML = "输入格式正确 √"
                        e.nextElementSibling.style.color = "green"
                        binding.value.flag = true
                    }
                    else {
                        if (nam == "username") {
                            e.nextElementSibling.innerHTML = "4到16位（字母，数字，下划线，减号）"
                            e.nextElementSibling.style.color = "red"
                        }
                        else if (nam == "password") {
                            e.nextElementSibling.innerHTML = "6-16个字母和数字组成"
                            e.nextElementSibling.style.color = "red"
                        }
                    }
                    binding.value.value = el.value

                }
                function changeBorder() {
                    el.onfocus = function() {
                        el.parentNode.style.border = "1px solid dodgerblue"
                    }
                    el.onblur = function() {
                        el.parentNode.style.border = "1px solid #ccc"
                    }
                }
                if (binding.expression == "username") {
                    //用户名正则，4到16位（字母，数字，下划线，减号）
                    let usernameReg = /^[a-zA-Z0-9_-]{4,16}$/;
                    el.onkeyup = function() {
                        panduan("username", usernameReg.test(this.value), el)
                    }
                    changeBorder()
                }
                else if (binding.expression == "password") {
                    //密码正则，6到16位（字母，数字，下划线，减号）
                    let passwordReg = /^[a-zA-Z0-9_-]{6,16}$/;
                    el.onkeyup = function() {
                        panduan("password", passwordReg.test(this.value), el)
                    }
                    changeBorder()
                }
            }
        }
    }
}
// bind(el, binding, vnode, oldnode) {
//                 function panduan(nam, flag, e) {
//                     // 如果正则匹配
//                     if (flag) {
//                         e.nextElementSibling.innerHTML = "输入格式正确 √"
//                         e.nextElementSibling.style.color = "green"
//                     }
//                     else {
//                         if (nam == "username") {
//                             e.nextElementSibling.innerHTML = "4到16位（字母，数字，下划线，减号）"
//                             e.nextElementSibling.style.color = "red"
//                         }
//                         else if (nam == "password") {
//                             e.nextElementSibling.innerHTML = "6-16个字母和数字组成"
//                             e.nextElementSibling.style.color = "red"
//                         }
//                     }

//                 }
//                 function changeBorder() {
//                     el.onfocus = function() {
//                         el.parentNode.style.border = "1px solid dodgerblue"
//                     }
//                     el.onblur = function() {
//                         el.parentNode.style.border = "1px solid #ccc"
//                     }
//                 }
//                 if (binding.expression == "'username'") {
//                     //用户名正则，4到16位（字母，数字，下划线，减号）
//                     let usernameReg = /^[a-zA-Z0-9_-]{4,16}$/;
//                     el.onkeyup = function() {
//                         panduan("username", usernameReg.test(this.value), el)
//                     }
//                     changeBorder()
//                 }
//                 else if (binding.expression == "'password'") {
//                     //密码必须由6-16个英文字母和数字的字符串组成！
//                     let passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
//                     el.onkeyup = function() {
//                         panduan("password", passwordReg.test(this.value), el)
//                     }
//                     changeBorder()
//                 }
//             }
</script>

<style>
#Login {
    width: 400px;
    height: 380px;
    border: 2px solid darkorange;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: #fff;
    opacity: .95;
}

#Login h2 {
    font-size: 25px;
    color: darkorange;
    line-height: 50px;
}

#Login p {
    margin: 35px 0 35px 10%;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 5px;
    line-height: 25px;
    padding: 10px;
    position: relative;
}

#Login input {
    border: 0;
    outline: 0;
    padding-left: 10px;
}

#Login div {
    width: 100%;
    text-align: center;
}

#Login button {
    width: 80%;
    color: #fff;
    cursor: pointer;
}

#Login p b {
    display: block;
    width: 100%;
    text-align: center;
    position: absolute;
    font-size: 14px;
    color: red;
    left: 50%;
    bottom: -22px;
    transform: translate(-50%)
}
</style>
