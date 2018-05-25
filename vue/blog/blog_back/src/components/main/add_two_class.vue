<template>
  <div>
    <el-form status-icon label-width="100px" class="demo-ruleForm two_class">
      <h3 class="h3">一级分类列表</h3>
      <el-form-item label="一级中文类名">
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="(item,ind) in data" :key="ind" :label="item.cnname" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <h3 class="h3">二级分类列表</h3>
      <el-form-item label="二级中文类名">
        <el-input placeholder="请输入内容" v-model="msg[0].data"></el-input>
      </el-form-item>
      <el-form-item label="二级英文类名">
        <el-input placeholder="请输入内容" v-model="msg[1].data"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
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
      data: null,
      value: "",
      oneClass: "",
      msg: [
        { data: "", type: "twoChinese", title: "二级中文类名" },
        { data: "", type: "twoEnglish", title: "二级英文类名" }
      ]
    }
  },
  methods: {
    submit() {
      // 判断是否选中一级路由
      if (this.value) {
        // 公用的逻辑判断
        let msg = test(this, this.msg)
        if (msg) {
          msg.parentId = this.value
          this.axios.post("/api/back/class/addTwoClass", {
            msg
          }).then((data) => {
            switch (data.data.code) {
              case "2021":
                this.$message.success(data.data.msg)
                this.$router.push("/back/class_list")
                break;
              case "2022":
              case "2020":
                this.$message.warning(data.data.msg)
                break;
            }
          })
        }
      }
      else {
        this.$message({
          message: "请选择一级分类！",
          type: 'error'
        });
      }
    },
    reset() {
      this.msg.forEach((v, i) => {
        v.data = ""
      })
    }
  },
  mounted() {
    this.axios("/api/back/class/getOneClass").then((data) => {
      this.data = data.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.two_class {
  width: 500px;
}

.two_class .h3 {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
}

.two_class>div {
  padding-left: 20px;
}
</style>
