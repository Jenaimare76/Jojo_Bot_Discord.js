const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {

if(!coins[message.author.id]){
    coins[message.author.id] = {
        coins: 0
    };
}

let utilisateurCoins = coins[message.author.id].coins;

let coinEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#00FF00")
.addField("💳", utilisateurCoins);

message.channel.send(coinEmbed).then(msg => {msg.delete(50000)});

}

module.exports.help = {
    name: "coins"
}
