const Discord = require("discord.js");

module.exports.run = async (bot, message, args, coins) => {

if(!coins[message.author.id]){
    coins[message.author.id] = {
        coins: 0
    };
}

let utilisateurCoins = coins[message.author.id].coins;

let coinEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#00FF00")
.addField("💳", utilisateurCoins)
.setDescription("🏧");

message.channel.send(coinEmbed).then(msg => {msg.delete(50000)});

}

module.exports.help = {
    name: "coins"
}
