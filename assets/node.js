const fs = require('fs')
const { exec } = require('node:child_process');

const folder = './spine/ark_recode/head'

const res = fs.readdirSync(folder)
// console.log(JSON.stringify(res, null, 2))

const result = res.map((name) => {
  const matched = name.match(/^Icon_Head_(L|S)_/g);
  console.log(matched);
  exec(`mv ${folder}/${name} ${folder}/${name.replace(matched, '')}`);
  return name.replace(matched, '');
})
console.log(JSON.stringify(result, null, 2));