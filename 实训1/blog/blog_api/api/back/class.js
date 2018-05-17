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


// 插入一级二级分类
router.post("/addClass", (req, res, next) => {
  let { oneChinese, oneEnglish, twoChinese, twoEnglish } = req.body.msg
  if (oneChinese && oneEnglish && twoChinese && twoEnglish) {
    let oneId = Unique()
    let testOne = `select * from one_class where enname='${oneEnglish}' or cnname='${oneChinese}'`
    var insertOne = `insert into one_class(id,enname,cnname,time) values('${oneId}','${oneEnglish}','${oneChinese}','${CreatTime()}')`
    var insertTwo = `insert into two_class(id,parent_id,enname,cnname,article_num,time) values('${Unique()}','${oneId}','${twoEnglish}','${twoChinese}','0','${CreatTime()}')`
    var createTable = `CREATE TABLE ${oneEnglish} (LIST INT(11) UNIQUE NOT NULL AUTO_INCREMENT, id VARCHAR(255) UNIQUE PRIMARY KEY, oneId VARCHAR(255), twoId VARCHAR(255), article_name VARCHAR(255), editer VARCHAR(255), content LONGTEXT, time DATETIME, visitors INT, daodu VARCHAR(255), imgsrc VARCHAR(255), recommend TINYINT, art_show TINYINT);`
    async function sqlAllHandle() {
      await searchHandle(testOne)
      await sqlHandle(insertOne);
      await sqlHandle(insertTwo);
      await query(createTable);
      return {
        code: "2001",
        msg: "插入分类成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "2002",
        msg: "插入失败！可能一级分类名重复"
      })
    })
  }
  else {
    res.send({
      code: "2000",
      msg: "数据传入不正确！请检测传入的数据"
    })
  }
})


// 请求一级分类
router.get("/getOneClass", (req, res, next) => {
  let getOne = "select * from one_class"
  readHandle(getOne).then((data) => {
    res.send(data)
  })
})

// 请求二级分类
router.get("/getTwoClass", (req, res, next) => {
  let getTwo = "select * from two_class"
  readHandle(getTwo).then((data) => {
    res.send(data)
  })
})


// 请求一级二级分类
router.get("/getClassList", (req, res, next) => {
  let getOne = "select * from one_class"
  let getTwo = "select * from two_class"
  async function sqlAllHandle() {
    let oneData = await readHandle(getOne);
    let twoData = await readHandle(getTwo);
    let arr = []
    oneData.forEach((v, i) => {
      let obj = {}
      obj.oneClass = v
      obj.children = []
      twoData.forEach((val, ind) => {
        if (v.id == val.parent_id) {
          obj.children.push({ twoClass: val })
        }
      })
      arr.push(obj)
    })
    return {
      arr
    }
  }
  sqlAllHandle().then((data) => {
    res.send(data)
  }).catch((err) => {
    res.send({
      code: "2012",
      msg: "查找失败！"
    })
  })
})


// 插入二级分类
router.post("/addTwoClass", (req, res, next) => {
  let { twoChinese, twoEnglish, parentId } = req.body.msg
  if (twoChinese && twoEnglish && parentId) {
    let oneId = Unique()
    let testTwoChinese = `select * from two_class where parent_id='${parentId}' and enname='${twoEnglish}'`
    let testTwoEnglish = `select * from two_class where parent_id='${parentId}' and cnname='${twoChinese}'`
    var insertTwo = `insert into two_class(id,parent_id,enname,cnname,article_num,time) values('${Unique()}','${parentId}','${twoEnglish}','${twoChinese}','0','${CreatTime()}')`
    async function sqlAllHandle() {
      await searchHandle(testTwoChinese)
      await searchHandle(testTwoEnglish)
      await sqlHandle(insertTwo);
      return {
        code: "2021",
        msg: "插入二级分类成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "2022",
        msg: "插入失败！可能二级分类名重复"
      })
    })
  }
  else {
    res.send({
      code: "2020",
      msg: "数据传入不正确！请检测传入的数据"
    })
  }
})


// 修改一级分类
router.post("/changeOneClass", (req, res, next) => {
  let { oneChinese, oneEnglish, oldId } = req.body.msg
  if (oneChinese && oneEnglish && oldId) {
    var testOne = `select * from one_class where enname='${oneEnglish}' or cnname='${oneChinese}'`
    var changeOneEnglish = `update one_class set enname='${oneEnglish}' where id='${oldId}'`
    var changeOneChinese = `update one_class set cnname='${oneChinese}' where id='${oldId}'`
    async function sqlAllHandle() {
      await searchHandle(testOne)
      await sqlHandle(changeOneEnglish);
      await sqlHandle(changeOneChinese);
      return {
        code: "2031",
        msg: "修改一级分类成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "2032",
        msg: "修改失败！类名重复"
      })
    })
  }
  else {
    res.send({
      code: "2030",
      msg: "数据传入不正确！请检测传入的数据"
    })
  }
})

// 修改二级分类
router.post("/changeTwoClass", (req, res, next) => {
  let { twoChinese, twoEnglish, oldId, parentId } = req.body.msg
  if (twoChinese && twoEnglish && oldId && parentId) {
    let testTwoChinese = `select * from two_class where parent_id='${parentId}' and enname='${twoEnglish}'`
    let testTwoEnglish = `select * from two_class where parent_id='${parentId}' and cnname='${twoChinese}'`
    var changeTwoEnglish = `update two_class set enname='${twoEnglish}' where id='${oldId}'`
    var changeTwoChinese = `update two_class set cnname='${twoChinese}' where id='${oldId}'`
    async function sqlAllHandle() {
      await searchHandle(testTwoChinese)
      await searchHandle(testTwoEnglish)
      await sqlHandle(changeTwoEnglish);
      await sqlHandle(changeTwoChinese);
      return {
        code: "2041",
        msg: "修改二级分类成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "2042",
        msg: "修改失败！类名重复"
      })
    })
  }
  else {
    res.send({
      code: "2040",
      msg: "数据传入不正确！请检测传入的数据"
    })
  }
})

// 删除一级分类
router.post("/delOneClass", (req, res, next) => {
  let { id, oneEnglish } = req.body
  if (id && oneEnglish) {
    let delOneClass = `delete from one_class where id='${id}'`
    let delTwoClass = `delete from two_class where parent_id='${id}'`
    let deleteTable = `drop table ${oneEnglish}`
    async function sqlAllHandle() {
      await sqlHandle(delOneClass)
      await sqlHandle(delTwoClass)
      await query(deleteTable)
      return {
        code: "2051",
        msg: "删除成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "2052",
        msg: "删除失败！"
      })
    })
  }
  else {
    res.send({
      code: "2050",
      msg: "数据传入不正确！请检测传入的数据"
    })
  }
})

// 删除二级分类
router.post("/delTwoClass", (req, res, next) => {
  let { parentId, id, oneEnglish } = req.body
  if (parentId && id && oneEnglish) {
    let selectOneClass = `select * from two_class where parent_id='${parentId}'`
    readHandle(selectOneClass).then((data) => {
      if (data.length <= 1) {
        let delOneClass = `delete from one_class where id='${parentId}'`
        let delTwoClass = `delete from two_class where parent_id='${parentId}'`
        let deleteTable = `drop table ${oneEnglish}`
        async function sqlAllHandle() {
          await sqlHandle(delOneClass)
          await sqlHandle(delTwoClass)
          await query(deleteTable)
          return {
            code: "2061",
            msg: "删除成功！"
          }
        }
        sqlAllHandle().then((data) => {
          res.send(data)
        }).catch((err) => {
          res.send({
            code: "2062",
            msg: "删除失败！"
          })
        })
      } else {
        let delTwoClass = `delete from two_class where id='${id}'`
        let deleteArticle = `delete * from ${oneEnglish} where twoId='${id}'`
        async function sqlAllHandle() {
          await sqlHandle(delTwoClass)
          await sqlHandle(deleteArticle);
          return {
            code: "2071",
            msg: "删除成功！"
          }
        }
        sqlAllHandle().then((data) => {
          res.send(data)
        }).catch((err) => {
          res.send({
            code: "2072",
            msg: "此分类没有文章！分类删除成功！"
          })
        })
      }
    })
  }
})



module.exports = router