const {MessageEmbed} = require('discord.js')
const config = require('../config.json')

module.exports.run = (client, message, args) => {
  if(!config.ID_MEMBERS_HAS_PERMISSION_STOP_BOT.includes(message.author.id)) return message.channel.send(":x: You don't have any permissions for stop this bot.")
  
  message.channel.send(new MessageEmbed().setTitle('Bot stopped !')).then(m => client.destroy())
}
module.exports.help = {
  name: 'stop',
  aliase: []
}