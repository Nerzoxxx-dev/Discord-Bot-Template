module.exports.run = (client, message, args) => {
  message.channel.send('**Pong ! :ping_pong:** ' + client.ws.ping + ' ms')
}
module.exports.help = {
  name: 'ping',
  aliase: []
}