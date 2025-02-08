const {writeFileSync, mkdirSync} = require('fs');
const {join} = require('path');
const { writer } = require('repl');
const folderObj = {};

function recordInfo() {
  return {
    name: "recordInfo",
    // 输出生成钩子，执行时产物并没有输出
    generateBundle(options, bundle) {
      for (const fileName in bundle) {
        const [nm] = fileName.split(".");
        const parts = nm.split("/");
        const folder = parts.length > 1 ? parts[1] : parts[0];

        const exports = bundle[fileName].exports;

        if (Array.isArray(exports)) {
          exports.forEach((item) => {
            folderObj[item.toLowerCase()] = {
              folderNm: folder,
              functionNm: item,
            };
          });
        }
      }
    },
    // 输出并保存产物到磁盘
    // 输出生成钩子，执行时产物已输出
    writeBundle() {
      writeFileSync('vitepress/temp/info.json', JSON.stringify(folderObj, null, 2));
    },
  };
}

module.exports = {recordInfo};