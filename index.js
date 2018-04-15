//les constantes
const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

//connection du bot
bot.login(process.env.TOKEN);
