<template>
  <div>
    <el-form status-icon label-width="100px" class="demo-ruleForm one_class">
      <h3 class="h3">添加接口</h3>
      <el-form-item label="标题">
        <el-input placeholder="请输入内容" v-model="msg[0].data"></el-input>
      </el-form-item>
      <el-form-item label="接口地址">
        <el-input placeholder="请输入内容" v-model="msg[1].data"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="msg[2].data" placeholder="请选择">
          <el-option v-for="item in bof" :key="item.value" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="请求类型">
        <el-select v-model="msg[3].data" placeholder="请选择">
          <el-option v-for="item in types" :key="item.value" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="请求参数">
        <el-input type="textarea" :rows="5" v-model="msg[4].data" placeholder="请输入请求参数">
        </el-input>
      </el-form-item>
      <el-form-item label="响应数据">
        <el-input type="textarea" :rows="5" v-model="msg[5].data" placeholder="请输入相应数据">
        </el-input>
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
        { type: "title", data: "", title: "标题" },
        { type: "url", data: "", title: "接口地址" },
        { type: "backorfont", data: "", title: "类型" },
        { type: "type", data: "", title: "数据类型" },
        { type: "sendparams", data: "", title: "请求参数" },
        { type: "getparams", data: "", title: "相应数据" }
      ],
      bof: ["前端接口", "后台接口"],
      types: ["get", "post", "formdata"]
    };
  },
  methods: {
    submit() {
      let str = "";
      let num = 0;
      this.msg.forEach((v, i) => {
        if (v.type != "recommend" && v.type != "art_show") {
          if (v.data) {
            num++;
          } else {
            str += v.title + " ";
          }
        }
      });
      // 全部完善
      if (this.msg.length == num) {
        let obj = {};
        this.msg.forEach((v, i) => {
          if (v.type == "backorfont") {
            let data = v.data == "前端接口" ? "font" : "back";
            obj[v.type] = data;
          } else {
            obj[v.type] = v.data;
          }
        });
        this.axios.post("/api/back/module/addApi", obj).then(data => {
          switch (data.data.code) {
            case "3001":
              this.$message.success(data.data.msg);
              if (obj.backorfont == "back") {
                this.$router.push("/back/api_add_back");
              } else if (obj.backorfont == "font") {
                this.$router.push("/back/api_add_front");
              }
              break;
            case "3002":
            case "3000":
              this.$message.warning(data.data.msg);
              break;
          }
        });
      } else {
        str += "✖还没有完善！";
        this.$message.warning(str);
      }
    },
    reset() {
      this.msg.forEach((v, i) => {
        v.data = "";
      });
    }
  }
};
</script>

<style scoped>
.one_class {
  width: 500px;
}

.one_class .h3 {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  padding-left: 30px;
}

.one_class > div {
  padding-left: 20px;
}
</style>
