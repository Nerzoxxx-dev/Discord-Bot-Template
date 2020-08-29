const {MessageEmbed} = require('discord.js')
const config = require('../config.json')

module.exports.run = (client, message, args) => {
  var say = args.join(' ').slice(0)
  if(!say) return message.channel.send(':x: Please indicate the text to say.')
  if(message.channel.permissionsFor(message.author).has('MENTION_EVERYONE')){
    message.channel.send(say)
  }else{
    message.channel.send(say.replace('@here', '@.here').replace('@everyone', '@.everyone'))
  }
}
module.exports.help = {
  name: 'say',
  aliase: []
}