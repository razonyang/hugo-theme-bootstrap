import { Popover } from 'bootstrap'

document.addEventListener('DOMContentLoaded', function() {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
  var myDefaultAllowList = Popover.Default.allowList
  myDefaultAllowList.li = ['onclick']
  var popoverList = popoverTriggerList.map(function (ele) {
    let options = {
      allowList: myDefaultAllowList
    }
    let target = ele.getAttribute('data-target')
    if (target) {
      options.content = document.querySelector(target).innerHTML
    }
    return new Popover(ele, options)
  })
})