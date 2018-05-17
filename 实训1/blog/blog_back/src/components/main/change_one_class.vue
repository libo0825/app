<template>
    <div>
        <el-form status-icon label-width="100px" class="demo-ruleForm one_class">
            <h3 class="h3">一级分类列表</h3>
            <el-form-item label="一级中文类名">
                <el-input placeholder="请输入内容" v-model="msg[0].data"></el-input>
            </el-form-item>
            <el-form-item label="一级英文类名">
                <el-input placeholder="请输入内容" v-model="msg[1].data"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">确认修改</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import test from "./testValue"
export default {
    data() {
        return {
            msg: [
                { data: "", type: "oneChinese", title: "一级中文类名" },
                { data: "", type: "oneEnglish", title: "一级英文类名" }
            ]
        }
    },
    methods: {
        submit() {
            let msg = test(this, this.msg)
            if (msg) {
                msg.oldId = JSON.parse(sessionStorage.getItem("oneClass")).id
                this.axios.post("/api/back/class/changeOneClass", { msg }).then((data) => {
                    switch (data.data.code) {
                        case "2031":
                            this.$message.success(data.data.msg)
                            this.$router.push("/back/class_list")
                            break;
                        case "2032":
                        case "2030":
                            this.$message.warning(data.data.msg)
                            break;
                    }
                })
            }
        },
        reset() {
            this.msg.forEach((v, i) => {
                v.data = ""
            })
        }
    },
    mounted() {
        let oneClass = JSON.parse(sessionStorage.getItem("oneClass"))
        this.msg[0].data = oneClass.cnname
        this.msg[1].data = oneClass.enname
    }
}
</script>

<style scoped>
.one_class {
    width: 500px;
}

.one_class .h3 {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
}

.one_class>div {
    padding-left: 20px;
}
</style>
