<template>
    <div class="change_article">
        <el-form status-icon label-width="100px" class="demo-ruleForm one_class">
            <h3 class="h3">增加文章</h3>
            <el-form-item label="文章标题">
                <el-input placeholder="请输入标题" v-model="msg[0].data"></el-input>
            </el-form-item>
            <el-form-item label="是否显示">
                <el-switch class="change" style="display: block" v-model="msg[1].data" active-color="#13ce66" inactive-color="#ccc" active-text="是" inactive-text="否">
                </el-switch>
            </el-form-item>
            <el-form-item label="是否推荐">
                <el-switch class="change" style="display: block" v-model="msg[2].data" active-color="#13ce66" inactive-color="#ccc" active-text="是" inactive-text="否">
                </el-switch>
            </el-form-item>
            <el-form-item label="作者">
                <el-input placeholder="请输入作者姓名" v-model="msg[3].data"></el-input>
            </el-form-item>
            <el-form-item label="导读">
                <el-input type="textarea" v-model="msg[4].data" placeholder="请输入文章导读"></el-input>
            </el-form-item>
            <el-form-item label="时间">
                <el-date-picker v-model="msg[5].data" type="datetime" :editable="false" placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="内容">
                <el-input type="textarea" :rows="10" v-model="msg[6].data" placeholder="请输入文章内容"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: [
                { type: 'article_name', data: "", title: '标题' },
                { type: 'art_show', data: false, title: '是否显示' },
                { type: 'recommend', data: false, title: '是否推荐' },
                { type: 'editer', data: "", title: '作者' },
                { type: 'daodu', data: "", title: '导读' },
                { type: 'time', data: "", title: '时间' },
                { type: 'content', data: "", title: '内容' },
                { type: 'enname_one', data: "", title: '一级英文' },
                { type: 'id', data: "", title: 'id' },
            ],
        }
    },
    methods: {
        submit() {
            let str = ""
            let num = 0
            this.msg.forEach((v, i) => {
                if (v.type != "recommend" && v.type != "art_show") {
                    if (v.data) {
                        num++
                    }
                    else {
                        str += v.title + " "
                    }
                }
            })
            if (this.msg.length - 2 == num) {
                let obj = {}
                this.msg.forEach((v, i) => {
                    switch (v.type) {
                        case "recommend":
                        case "art_show":
                            obj[v.type] = v.data == "是" ? "1" : "0"
                            break;
                        case "time": // 转成数据库支持的格式
                            obj[v.type] = v.data.toLocaleString().replace(/[\u4e00-\u9fa5]+/, "").split("/").join("-")
                            break;
                        default:
                            obj[v.type] = v.data
                            break;
                    }
                })
                this.axios.post("/api/back/article/updateArticle", obj).then((data) => {
                    switch (data.data.code) {
                        case "3011":
                            this.$message.success(data.data.msg)
                            this.$router.push("/back/article_list")
                            break;
                        case "3012":
                        case "3010":
                            this.$message.warning(data.data.msg)
                            break;
                    }
                })
            }
            else {
                str += "✖还没有完善！"
                this.$message.warning(str)
            }
        },
        reset() {
            this.msg.forEach((v, i) => {
                if (v.type == "art_show" || v.type == "recommend") {
                    v.data = false
                }
                else {
                    v.data = ''
                }
            })
        }
    },
    created() {
        let id = this.$route.params.id
        this.axios.post("/api/back/article/getArticle", { id: id }).then((data) => {
            this.msg.forEach((v, i) => {
                if (v.type == "enname_one") {
                    v.data = data.data.enname_one
                }
                if (v.type == "id") {
                    v.data = data.data.id
                }
                for (var key in data.data) {
                    if (v.type == "art_show" || v.type == "recommend") {
                        if (key == v.type) {
                            v.data = data.data[key] == 1 ? true : false
                        }
                    }
                    else if (v.type == "time") {
                        if (key == v.type) {
                            v.data = new Date(data.data[key])
                        }
                    }
                    else {
                        if (key == v.type) {
                            v.data = data.data[key]
                        }
                    }
                }
            })
        })
    }
}
</script>

<style>
.one_class {
    width: 700px;
}

.change {
    margin-top: 10px;
    width: 30%;
}

.one_class .h3 {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    padding-left: 40px;
}
</style>
