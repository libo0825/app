<template>
  <el-menu default-active="4" class="el-menu-vertical-demo self">

    <el-submenu v-for="(val,ind) in data" :key="ind" :index="val.index">

      <template slot="title">
        <i :class="val.icon"></i>{{val.title}}</template>

      <el-menu-item v-for="(v,i) in val.children" :key="i" :index="v.index">
        <router-link :to="v.to">{{v.type}}</router-link>
      </el-menu-item>

    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "文章操作", icon: "el-icon-tickets", index: "1", children: [
            { type: "添加文章", index: "1-1", to: "/back/add_article" },
            { type: "文章列表", index: "1-2", to: "/back/article_list" }
          ]
        },
        {
          title: "分类操作", icon: "el-icon-menu", index: "2", children: [
            { type: "一级分类添加", index: "2-1", to: "/back/add_one_class" },
            { type: "二级分类添加", index: "2-2", to: "/back/add_two_class" },
            { type: "分类列表", index: "2-3", to: "/back/class_list" }
          ]
        },
        {
          title: "接口操作", icon: "el-icon-setting", index: "3", children: [
            { type: "添加接口", index: "3-1", to: "/back/api_add" },
            { type: "前台接口", index: "3-2", to: "/back/api_add_front" },
            { type: "后台接口", index: "3-3", to: "/back/api_add_back" }
          ]
        },
        {
          title: "留言板", icon: "el-icon-message", index: "4", children: [
            { type: "留言", index: "4-1", to: "/back/send_email" },
          ]
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.self {
  width: 200px;
}

.self li a {
  font-size: 12px;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
