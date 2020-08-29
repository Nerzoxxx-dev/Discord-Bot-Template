const {Client, Collection} = require('discord.js')
const client = new Client();
const fs = require('fs')
const config = require('./config.json')

const token = config.token
const prefix = config.prefix

client.commands = new Collection()

const commandFiles = fs.readdirSync('./Commands').filter(f => f.endsWith('.js'))
const eventsFiles = fs.readdirSync('./Events').filter(f => f.endsWith('.js'))

for(const f of commandFiles){
  var command = require('./Commands/' + f)
  client.commands.set(command.help.name, command)
  
  command.help.aliase.forEach(a => {
    if(command.help.aliase.length > 0){
      client.commands.set(a, command)
    }
  })
    console.log(f + " command load !")
}

for(var f of eventsFiles){
  var event = require('./Events/' + f)
  var eventName = f.split(".")[0]
  client.on(eventName, event.bind(null, client));
}
console.log(eventsFiles.length + " events load !")

client.on('message', (message) => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift()
  
  if(!client.commands.has(command)) return;
  
  client.commands.get(command).run(client, message, args)
})

client.login(token)