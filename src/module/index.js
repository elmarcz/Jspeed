const config = require('./config')
const colorNpm = require('colors')
const jspeed = require('./app')
const fetch = require('node-fetch')

if(config.startMsg == true){
    console.log(colorNpm.green(`[${config.nameModule}] is ready!`))
}

module.exports = jspeed