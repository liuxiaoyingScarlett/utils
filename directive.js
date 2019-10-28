/**
 * emoji表情展示
 */

import _ from 'lodash'
export default {
  inserted(el, binding) {
    binding.value = _.escape(binding.value)
    // 只取中括号中的内容并且进行数组去重
    let emoji = Array.from(new Set(binding.value.match(/[\u4e00-\u9fa5|\w]+(?=\])/g)))
    emoji.forEach(item => {
      let img = new Image()
      let src = baseURL + encodeURIComponent(item)
      img.src = src
      // 取到表情则用表情替换文案, 否则原样显示
      img.onload = () => {
        binding.value = binding.value.replace(new RegExp('\\[' + item + '\\]', 'g'), '<img class="lazy-img" src="' + src + '">')
        el.innerHTML = binding.value
      }
    })
    el.innerHTML = binding.value
  }
}


/**
 * 页面title
 */
export default {
  inserted(el, binding) {
    document.title = binding.value
  }
}
