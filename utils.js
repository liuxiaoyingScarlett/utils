/*
 * @Author: liuxiaoying
 * @Date: 2020-11-22 19:47:06
 * @LastEditors: liuxiaoying
 * @LastEditTime: 2020-11-22 20:25:50
 * @Description: 工具方法
 */
/**
 * id转为时间
 */
idToTime(id) {
  return new Date(parseInt(id.toString().substring(0, 8), 16) * 1000)
}

/**
 * 判断是否为图片链接
 * @param {String} content
 */
checkIsIMG(content) {
  return /\.(jpg|gif|png|jpeg|svg|gif|bmp|webp|psd|tiff)$/.test(content)
}

/**
 * 数组降维
 * @param arr
 */
reduceArr(arr) {
  return Array.prototype.concat.apply([], arr)
}

/**
 * 笛卡尔积-数组形式SKU计算
 * let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ]
 */

cartesianArray(arr) {
  return arr.reduce((acc, curr) => {
    var result = []
    acc.forEach((item)=> {
      curr.forEach((currItem) => {
        result.push([...item, ...currItem])
      })
    })
  }, [[]])
}

/**
 * 笛卡尔积-对象形式SKU计算
 * [{
 *  a: [1, 2, 3]
 * }, {
 *  b: [4, 5, 6]
 * }, {
 *  c: [7, 8, 9]
 * }]
 */
cartesianObj (array) {
  function c (part, index) {
    var k = Object.keys(array[index])[0]
    array[index][k].forEach(function (a) {
      var p = Object.assign({}, part, { [k]: a })
      if (index + 1 === array.length) {
        r.push(p)
        return
      }
      c(p, index + 1)
    })
  }

  var r = []
  c({}, 0)
  return r
}