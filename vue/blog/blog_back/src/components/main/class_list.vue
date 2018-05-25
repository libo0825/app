<template>
  <div class="wrapper">
    <el-table :data="data" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-table :data="props.row.children" style="width: 80%">
              <el-table-column label="二级分类中文" prop="twoClass.cnname">
              </el-table-column>
              <el-table-column label="二级分类英文" prop="twoClass.enname">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="() => {changeTwoClass(props.row.children,scope.$index)}">编辑</el-button>
                  <el-button size="mini" type="danger" @click="() => {delTwoClass(props.row,props.row.children,scope.$index)}">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="一级分类中文" prop="oneClass.cnname">
      </el-table-column>
      <el-table-column label="一级分类英文" prop="oneClass.enname">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="() => {changeOneClass(data,scope.$index)}">编辑</el-button>
          <el-button size="mini" type="danger" @click="() => {delOneClass(data,scope.$index)}">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null
    }
  },
  methods: {
    changeOneClass(oneClass, ind) {
      this.$router.push("/back/change_one_class")
      sessionStorage.setItem("oneClass", JSON.stringify(oneClass[ind].oneClass))
    },
    changeTwoClass(twoClass, ind) {
      this.$router.push("/back/change_two_class")
      sessionStorage.setItem("twoClass", JSON.stringify(twoClass[ind].twoClass))
    },
    delOneClass(data, ind) {
      this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        this.axios.post("/api/back/class/delOneClass", { id: data[ind].oneClass.id, oneEnglish: data[ind].oneClass.enname }).then((data) => {
          switch (data.data.code) {
            case "2051":
              this.$message({
                type: 'success',
                message: data.data.msg
              });
              this.axios("/api/back/class/getClassList").then((data) => {
                this.data = data.data.arr
              })
              break;
            case "2052":
            case "2050":
              this.$message({
                type: 'warning',
                message: data.data.msg
              });
              break;
          }
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    delTwoClass(DATA, data, ind) {
      this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        this.axios.post("/api/back/class/delTwoClass", { parentId: data[ind].twoClass.parent_id, id: data[ind].twoClass.id, oneEnglish: DATA.oneClass.enname }).then((data) => {
          switch (data.data.code) {
            case "2061":
            case "2071":
            case "2072":
              this.$message({
                type: 'success',
                message: data.data.msg
              });
              this.axios("/api/back/class/getClassList").then((data) => {
                this.data = data.data.arr
              })
              break;
            case "2062":
              this.$message({
                type: 'warning',
                message: data.data.msg
              });
              break;
          }
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  mounted() {
    this.axios("/api/back/class/getClassList").then((data) => {
      this.data = data.data.arr
    })
  }
}
</script>

<style>
.wrapper {
  overflow: hidden;
}

.self {
  width: 100%;
}

.el-submenu ul li a {
  text-decoration: none;
}
</style>
