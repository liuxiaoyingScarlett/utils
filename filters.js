/**
   * @param {Number} number
   * 格式化大数数字
   * XX.X亿 XX.X万
   */
  formatNumber(number) {
    // 消除字符串中的末位.0
    const spliceZero = function(str) {
      return str.charAt(str.length - 1) === '0' ? str.slice(0, -2) : str
    }
    if (typeof number === 'string') {
      let n = Number(number)
      if (!isNaN(n)) {
        number = parseFloat(number)
      }
    }

    if (typeof number === 'number') {
      if (number >= 100000000) {
        let fixedNumber = spliceZero((number / 100000000).toFixed(1))
        return fixedNumber + ' 亿'
      } else if (number >= 10000) {
        let fixedNumber = spliceZero((number / 10000).toFixed(1))
        return fixedNumber + ' 万'
      } else {
        return number
      }
    }
    return number
  }