const OpenCC = require('opencc')
var fs = require("fs")
const input = "i18n/zh-cn.toml"
const langs = [
  {
    code: 'zh-tw',
    converter: new OpenCC('s2twp.json')
  },
  {
    code: 'zh-hk',
    converter: new OpenCC('s2hk.json')
  }
]
fs.readFile(input, function(err, buf) {
  if (err) {
    console.log(err)
    return
  }
  langs.forEach(function(lang) {
    lang.converter.convertPromise(buf).then(converted => {
      fs.writeFile('i18n/' + lang.code + '.toml', converted, (err) => {
        if (err) {
          console.log(err)
          return
        }
      })
    })
  })
});
