var express = require('express');
var router = express.Router();
var Unique = require("../common/Unique")
var CreatTime = require("../common/creatTime")
var {
  sqlHandle, // 更改
  readHandle, //读取操作
  searchHandle, //检测有无某条数据，有为false
  searchHandleNormal, //检测有无某条数据，有为true
  query // //基本操作
} = require("../../config/db_connect")


// 插入文档
router.post("/addApi", (req, res, next) => {
  let {
    backorfont,
    getparams,
    sendparams,
    title,
    type,
    url
  } = req.body
  if (backorfont && getparams && sendparams && title && type && url) {
    var addApi = `insert into apilist(id,title,type,url,sendparams,getparams,backorfont,time) values('${Unique()}','${title}','${type}','${url}','${sendparams}','${getparams}','${backorfont}','${CreatTime()}')`
    async function sqlAllHandle() {
      await sqlHandle(addApi);
      return {
        code: "3001",
        msg: "插入分类成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "3002",
        msg: "插入失败！"
      })
    })
  } else {
    res.send({
      code: "3000",
      msg: "数据传入不正确！请检测传入的数据"
    })
  }
})

//请求前台数据
router.post("/getFont", (req, res, next) => {
  let getFont = 'select * from apilist where backorfont="font"'
  readHandle(getFont).then(data => {
    res.send(data)
  })
})
//请求后台数据
router.post("/getPost", (req, res, next) => {
  let getPost = 'select * from apilist where backorfont="back"'
  readHandle(getPost).then(data => {
    res.send(data)
  })
})
//删除数据
router.post("/del", (req, res, next) => {
  let {
    delId
  } = req.body

  console.log(delId)
  if (delId) {
    let delid = `delete from apilist where id='${delId}'`
    async function sqlAllHandle() {
      await query(delid);
      return {
        code: "3081",
        msg: "删除成功"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "3082",
        msg: "删除失败"
      })
    })

  }
})
//获取编辑页的数据
router.post("/post", (req, res, next) => {
  let {
    id
  } = req.body
  let postid = `select * from apilist where id='${id}'`
  readHandle(postid).then(data => {
    res.send(data)
  })
})
module.exports = router