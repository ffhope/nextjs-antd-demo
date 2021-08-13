const yaml = require('js-yaml');
const fs = require('fs');

let jsonObject
try {
    jsonObject = yaml.safeLoad(fs.readFileSync('./i18n/i18n.yml', 'utf8'));
} catch (e) {
    console.log(e);
}

let objectArray = {};

for(var key in jsonObject){
  for(var lang in jsonObject[key]){ 
    objectArray[lang] = objectArray[lang]||{}
      objectArray[lang][key] = jsonObject[key][lang]; 
  }
}

// 分别导出成多个不同语言国家的文件
for(var key in objectArray){
  fs.writeFileSync('./src/locales/' + key + '.json', JSON.stringify(objectArray[key]));
} 