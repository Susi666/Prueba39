global.owner = ['50371777771'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

// Sticker WM
global.packname = 'Susi\n❏ 𝐿𝑎 𝑓𝑒𝑙𝑖𝑐𝑖𝑑𝑎𝑑 𝑛𝑜 𝑒𝑠 𝑒𝑙 𝑜𝑏𝑗𝑒𝑡𝑖𝑣𝑜...\n❏ 𝐄𝐬 𝐞𝐥 𝐜𝐚𝐦𝐢𝐧𝐨\n⚠️苏珊娜⚠️ '
global.author = '➬🌤️SusiBot🌤️\n↳  🔥+503 7177 7771🥀\n↳  🌺Susi.li_🌺'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
