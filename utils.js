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