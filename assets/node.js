const fs = require('fs')

const folder = './live2d/sin'

const res = fs.readdirSync(folder)
console.log(JSON.stringify(res, null, 2))
