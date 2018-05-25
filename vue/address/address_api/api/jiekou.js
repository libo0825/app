var express = require('express');
var router = express.Router();
var Unique = require("../common/Unique")
var CreatTime = require("../common/creatTime")
var {
  sqlHandle,  // 更改
  readHandle,  //读取操作
  searchHandle,  //检测有无某条数据，有为false
  searchHandleNormal,  //检测有无某条数据，有为true
  query             // //基本操作
} = require("../config/db_connect")




// 获取地址列表
router.post("/list", (req, res, next) => {
  let sql = `select * from list`
  console.log(1)
  readHandle(sql).then((data) => {
    res.send(data)
    
  })
})
//插入地址
router.post("/add", (req, res, next) => {
  let { names, address, phone} = req.body
    let test= `select * from list where names='${names}'`
     let insert = `insert into list (id,names,phone,address,flg) values ('${Unique()}','${names}','${phone}','${address}','0')`
    async function sqlAllHandle() {
      await searchHandle(test)
      await query(insert);
      return {
        code: "1",
        msg: "添加地址成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "0",
        msg: "插入失败！收货人重复"
      })
    })
  
})
//修改地址
router.post("/change", (req, res, next) => {
  let { names, address, phone,id} = req.body
  let test= `select * from list where names='${names}'`
    let change = `update list set names='${names}',phone='${phone}',address='${address}' where id='${id}'`
    async function sqlAllHandle() {
     await searchHandle(test)
      await sqlHandle(change);
      return {
        code: "1",
        msg: "修改地址成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "0",
        msg: "修改失败！收货人重复"
      })
    })
  
})
//删除地址
router.post("/del", (req, res, next) => {
    let { id} = req.body
    let sql = `select * from list`
    
    let del = `delete from list where id='${id}'`
    let list=''
    async function sqlAllHandle() {
      await query(del);
      await readHandle(sql).then(data=>{
        list=data
      })

      return {
        code: "1",
        msg: "删除地址成功！",
        list
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "0",
        msg: "删除失败"
      })
    })
  
})

module.exports = router