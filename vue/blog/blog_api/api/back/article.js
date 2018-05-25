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
} = require("../../config/db_connect")


// 插入文章
router.post("/addArticle", (req, res, next) => {
  let { content, daodu, art_show, enname_one, oneId, time, article_name, recommend, twoId, editer } = req.body
  if (content && daodu && enname_one && oneId && time && article_name && twoId && editer && art_show && recommend) {
    let insertArticle = `insert into ${enname_one} (id,oneId,twoId,article_name,editer,content,time,daodu,recommend,art_show) values('${Unique()}','${oneId}','${twoId}','${article_name}','${editer}','${content}','${time}','${daodu}','${recommend}','${art_show}')`
    let updateTwoClass = `update two_class set article_num=article_num+1 where id='${twoId}'`
    async function sqlAllHandle() {
      await sqlHandle(insertArticle);
      await sqlHandle(updateTwoClass)
      return {
        code: "3001",
        msg: "插入文章成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "3002",
        msg: "插入文章失败！"
      })
    })
  }
  else {
    res.send({
      code: "3000",
      msg: "数据传入不正确！"
    })
  }
})

// 获取文章列表
router.get("/articleList", (req, res, next) => {
  let selectOne = `select * from one_class`
  readHandle(selectOne).then((data) => {
    let arr = []
    let all = []
    data.forEach((v, i) => {
      var getArticleList = `select * from ${v.enname}`
      readHandle(getArticleList).then((data1) => {
        if (data1.length > 0) {
          arr.push(data1)
        }
        else {
          arr.push("")
        }
        if (data.length == arr.length) {
          arr.forEach((a, b) => {
            if (a) {
              a.forEach((val, ind) => {
                all.push(val)
              })
            }
          })
          all.forEach((q, w) => {
            q.enname_one = v.enname
          })
          res.send(all)
        }
      });
    })
  })
})

// 根据id找文章
router.post("/getArticle", (req, res, next) => {
  let id = req.body.id
  let selectOne = `select * from one_class`
  readHandle(selectOne).then((data) => {
    let arr = []
    let all = []
    data.forEach((v, i) => {
      var getArticleList = `select * from ${v.enname}`
      readHandle(getArticleList).then((data1) => {
        if (data1.length > 0) {
          arr.push(data1)
        }
        else {
          arr.push("")
        }
        if (data.length == arr.length) {
          arr.forEach((a, b) => {
            if (a) {
              a.forEach((val, ind) => {
                all.push(val)
              })
            }
          })
        }
        all.forEach((q, w) => {
          if (q.id == id) {
            q.enname_one = v.enname
            res.send(q)
          }
        })
      })
    })
  })
})


// 编辑文章
router.post("/updateArticle", (req, res, next) => {
  let { enname_one, id, content, daodu, art_show, time, article_name, recommend, editer } = req.body
  if (enname_one && id && content && daodu && art_show && time && article_name && recommend && editer) {
    let updateArticle = `update ${enname_one} set content='${content}',daodu='${daodu}',art_show='${art_show}',time='${time}',article_name='${article_name}',recommend='${recommend}',editer='${editer}' where id='${id}'`
    async function sqlAllHandle() {
      await sqlHandle(updateArticle);
      return {
        code: "3011",
        msg: "更改成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "3012",
        msg: "更改失败！"
      })
    })
  }
  else {
    res.send({
      code: "3010",
      msg: "数据传入错误！"
    })
  }
})

// 删除文章
router.post("/deleteArticle", (req, res, next) => {
  let { enname_one, id } = req.body
  if (enname_one && id) {
    let deleteArticle = `delete from ${enname_one} where id='${id}'`
    async function sqlAllHandle() {
      await sqlHandle(deleteArticle);
      return {
        code: "3021",
        msg: "删除成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "3022",
        msg: "删除失败！"
      })
    })
  }
  else {
    res.send({
      code: "3020",
      msg: "数据传入错误！"
    })
  }
})
module.exports = router