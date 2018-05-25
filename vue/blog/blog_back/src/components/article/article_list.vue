<template>
    <div class="articleList">
        <el-table :data="lastData" style="width: 90%">
            <el-table-column label="标题" width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.article_name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="作者" width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.editer }}</span>
                </template>
            </el-table-column>
            <el-table-column label="时间" width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.time }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="change(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="delArticle(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[5, 10, 15, 20]" :page-size="pages" layout="total, sizes, prev, pager, next, jumper" :total="this.listData.length"></el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: 5,
            listData: [],
            data: [],
            lastData: [],
            page: 1
        }
    },
    methods: {
        delArticle(ind, data) {
            let obj = {}
            obj.enname_one = data.enname_one
            obj.id = data.id
            this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
            }).then(() => {
                this.axios.post("/api/back/article/deleteArticle", obj).then((data) => {
                    switch (data.data.code) {
                        case "3021":
                            this.$message({
                                type: 'success',
                                message: data.data.msg
                            });
                            this.axios("/api/back/article/articleList").then((data1) => {
                                this.listData = data1.data
                                this.data = []
                                for (let i = 0; i < this.listData.length; i += this.pages) {
                                    this.data.push(this.listData.slice(i, i + this.pages))
                                }
                                this.lastData = this.data[this.page - 1]
                            })
                            break;
                        case "3022":
                        case "3020":
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
            })
        },
        change(ind, data) {
            this.$router.push("/back/change_article/" + data.id)
        },
        handleSizeChange(val) {
            this.pages = val
            this.data = []
            for (let i = 0; i < this.listData.length; i += this.pages) {
                this.data.push(this.listData.slice(i, i + this.pages))
            }
            this.lastData = this.data[this.page - 1]
        },
        handleCurrentChange(val) {
            this.page = val
            this.lastData = this.data[this.page - 1]
        }
    },
    created() {
        this.axios("/api/back/article/articleList").then((data) => {
            this.listData = data.data
            for (let i = 0; i < this.listData.length; i += this.pages) {
                this.data.push(this.listData.slice(i, i + this.pages))
            }
            this.lastData = this.data[this.page - 1]
        })
    }
}
</script>

<style>

</style>
