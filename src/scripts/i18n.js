const OpenCC = require('opencc');
const fs = require('fs');

const input = 'i18n/zh-cn.toml';
const langs = [
  {
    code: 'zh-tw',
    converter: new OpenCC('s2twp.json'),
  },
  {
    code: 'zh-hk',
    converter: new OpenCC('s2hk.json'),
  },
];
fs.readFile(input, (err, buf) => {
  if (err) {
    console.error(err);
    return;
  }
  langs.forEach((lang) => {
    lang.converter.convertPromise(buf).then((converted) => {
      fs.writeFile(`i18n/${lang.code}.toml`, converted, (e) => {
        if (e) {
          console.log(e);
        }
      });
    });
  });
});
