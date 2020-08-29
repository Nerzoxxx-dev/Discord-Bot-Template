# Discord-Bot-Template

A handler Discord bot template developped by me.

# Installation

For install all modules, you must start a terminal where nodejs is installed and go to your Bot-discord-template (once installed). By the way, you must enter this commands: 

npm init -y
npm i discord.js
npm i fs

# Configuration

You have a file (config.json) where you can config your bot with your infos (if it's no make, you must create a bot in discord developper portal (https://discord.com/developers/applications/))

The base prefix set is *. Where are different commands (ping, stop and say). In config, the field "ID_MEMBERS_HAS_PERMISSION_STOP_BOT" serves at enter id (one at at time) of all members who can stop the bot, push a field if you don't need that. Expemple : 

"ID_MEMBERS_HAS_PERMISSION_STOP_BOT": ["64621651244515212", "564121545212"] 

(this is a random numbers, not real numbers).

# Start

You must just enter this command in your terminal : 

node index.js

# Questions

If you have any questions, contact me on Discord (my Discord tag: Nerzox#1604).
