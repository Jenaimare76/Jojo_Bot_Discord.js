const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
let coins = require("../coins.json");
const agree = "✅";
const disagree = "❎";


module.exports.run = async (bot, message, args) => {

    if(!coins[message.author.id]){
        return message.reply("vous ne possedez pas d'argent !")
    }

    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0]);

    if(!coins[pUser.id]){
        coins[pUser.id] = {
            coins: 0
        };
    }

    let pCoins = coins[pUser.id].coins;
    let sCoins = coins[message.author.id].coins;

    if(sCoins < args[0]) return message.reply("pas assez d'argent !");

    coins[message.author.id] = {
        coins: sCoins - parseInt(args[1])
    };

    coins[pUser.id] = {
        coins: pCoins + parseInt(args[1])
    };

    let coinsgivembed = new Discord.RichEmbed()
    .setColor("#002500")
    .addField("Transfert:", `${message.author} => ${pUser}`)
    .addField("Sommes:", `${args[1]} 💴 `);

    let msg = await message.channel.send(coinsgivembed);
    await msg.react(agree);
    await msg.react(disagree);

    if(`${message.author}`)

    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if(err) console.log(err)
    });

}

module.exports.help = {
    name: "givecoin"
}