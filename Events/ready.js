const Discord = require('discord.js')
const config = require('../config.json')

module.exports = (client, ready) => {
  client.user.setActivity(config.status.replace("{server_count}", serverCount(client)), {type: config.type})
  console.log('I\'m start')
}
var serverCount = function(client){
  var count = 0
  client.guilds.cache.map(g => {
    count = parseInt(count) + parseInt(g.memberCount)
  })
  return count;
}
