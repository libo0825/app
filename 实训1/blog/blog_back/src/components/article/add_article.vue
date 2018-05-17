<template>
    <div id="add_article">
        <el-form status-icon label-width="100px" class="demo-ruleForm one_class">
            <h3 class="h3">增加文章</h3>
            <el-form-item label="文章标题">
                <el-input placeholder="请输入标题" v-model="msg[0].data"></el-input>
            </el-form-item>
            <el-form-item label="一级类名">
                <el-select v-model="msg[1].data" placeholder="请选择" @change="getTwo">
                    <el-option v-for="(item,ind) in oneClassData" :key="ind" :label="item.cnname" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="二级类名">
                <el-select v-model="msg[2].data" placeholder="请选择">
                    <el-option v-for="(item,ind) in twoClassData" :key="ind" :label="item.cnname" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否显示">
                <el-switch class="change" style="display: block" v-model="msg[3].data" active-color="#13ce66" inactive-color="#ccc" active-text="是" inactive-text="否">
                </el-switch>
            </el-form-item>
            <el-form-item label="是否推荐">
                <el-switch class="change" style="display: block" v-model="msg[4].data" active-color="#13ce66" inactive-color="#ccc" active-text="是" inactive-text="否">
                </el-switch>
            </el-form-item>
            <el-form-item label="作者">
                <el-input placeholder="请输入作者姓名" v-model="msg[5].data"></el-input>
            </el-form-item>
            <el-form-item label="导读">
                <el-input type="textarea" v-model="msg[6].data" placeholder="请输入文章导读"></el-input>
            </el-form-item>
            <el-form-item label="时间">
                <el-date-picker v-model="msg[7].data" type="datetime" :editable="false" placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="内容">
                <el-input type="textarea" :rows="10" v-model="msg[8].data" placeholder="请输入文章内容"></el-input>
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
            oneClassData: null,
            twoClassData: null,
            msg: [
                { type: 'article_name', data: "", title: '标题' },
                { type: "oneId", data: "", title: '一级分类' },
                { type: 'twoId', data: "", title: '二级分类' },
                { type: 'art_show', data: "否", title: '是否显示' },
                { type: 'recommend', data: "否", title: '是否推荐' },
                { type: 'editer', data: "", title: '作者' },
                { type: 'daodu', data: "", title: '导读' },
                { type: 'time', data: "", title: '时间' },
                { type: 'content', data: "", title: '内容' },
                { type: 'enname_one', data: "", title: '一级英文' },
            ],
        }
    },
    methods: {
        getTwo() {
            this.axios("/api/back/class/getTwoClass").then((data) => {
                let arr = []
                data.data.forEach((v, i) => {
                    if (v.parent_id == this.msg[1].data) {
                        arr.push(v)
                    }
                })
                this.oneClassData.forEach((v, i) => {
                    if (this.msg[1].data == v.id) {
                        this.msg[9].data = v.enname
                    }
                })
                this.twoClassData = arr
                this.msg[2].data = ""
            })
        },
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
            // 全部完善
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
                this.axios.post("/api/back/article/addArticle", obj).then((data) => {
                    switch (data.data.code) {
                        case "3001":
                            this.$message.success(data.data.msg)
                            this.$router.push("/back/article_list")
                            break;
                        case "3002":
                        case "3000":
                            this.$message.warning(data.data.msg)
                            this.reset()
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
                if (v.type == "recommend" || v.type == "art_show") {
                    v.data = false
                }
                // 不改变一级分类
                else if (v.type == "oneId" || v.type == "enname_one") {

                }
                else {
                    v.data = ''
                }
            })
        }
    },
    mounted() {
        this.axios("/api/back/class/getOneClass").then((data) => {
            this.oneClassData = data.data
            if (data.data[0]) {
                this.msg[1].data = data.data[0].id
            }
            this.oneClassData.forEach((v, i) => {
                if (data.data[0].id == v.id) {
                    this.msg[9].data = v.enname
                }
            })
            this.axios("/api/back/class/getTwoClass").then((data1) => {
                let arr = []
                data1.data.forEach((v, i) => {
                    if (v.parent_id == data.data[0].id) {
                        arr.push(v)
                    }
                })
                this.oneClassData.forEach((v, i) => {
                    if (this.msg[1].data == v.id) {
                        this.msg[9].data = v.enname
                    }
                })
                this.twoClassData = arr
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
