<template>
  <div class="articleList">
    <el-table :data="tableData" style="width: 90%">
      <el-table-column label="标题" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="前后端分类" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.backorfont }}</span>
        </template>
      </el-table-column>
      <el-table-column label="时间" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click='change(scope.row.id)'>编辑</el-button>
          <el-button size="mini" type="danger" @click='del(scope.row.id)'>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[5, 10, 15, 20]" :page-size="pages" layout="total, sizes, prev, pager, next, jumper" :total="100"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: 5,
      page: 1,
      tableData: []
    };
  },
  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {},
    change(id) {
      sessionStorage.setItem("changeId", id);
      this.$router.push("/back/changeapi");
    },
    del(id) {
      sessionStorage.setItem("delId", id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let delId = sessionStorage.getItem("delId");
          this.axios.post("/api/back/module/del", { delId }).then(data => {
            if (data.data.code == "3081") {
              this.$message({
                type: "success",
                message: data.data.msg
              });
            } else {
              this.$message({
                type: "error",
                message: data.data.msg
              });
            }
            this.axios.post("/api/back/module/getFont").then(data => {
              this.tableData = data.data;
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  mounted() {
    this.axios.post("/api/back/module/getFont").then(data => {
      this.tableData = data.data;
    });
  }
};
</script>

<style>

</style>
