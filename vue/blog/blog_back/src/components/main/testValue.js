export default function (that, msg) {
    let ChineseReg = /^[\u4e00-\u9fa5]+$/
    let EnglishReg = /^[A-Za-z]+$/
    // 为空提示
    let str = ''
    // 规则提示
    let regStr = ''
    // 总数是否都成功
    let num = 0
    // 循环
    msg.forEach((v, i) => {
        // 判断是否为空
        if (v.data) {
            // 中文检测 
            if (v.type.indexOf("Chinese") != -1) {
                num++
                if (!ChineseReg.test(v.data)) {
                    regStr += v.title + " "
                }
            }
            // 英文检测
            else if (v.type.indexOf("English") != -1) {
                num++
                if (!EnglishReg.test(v.data)) {
                    regStr += v.title + " "
                }
            }
        }
        // 为空提示
        else {
            str += v.title + " "
            that.$message({
                message: str + "✖还没有输入！",
                type: 'error'
            });

        }
    })

    let obj = {}
    // 如果全部存在
    if (num == msg.length) {
        // 正则全部合格
        if (!regStr) {
            msg.forEach((v, i) => {
                obj[v.type] = v.data
            })
            // 最后返回的数据
            return obj
        }
        // 正则不合格提示
        else {
            that.$message({
                message: regStr + "✖输入规则有误！",
                type: 'error'
            });
        }
    }
}