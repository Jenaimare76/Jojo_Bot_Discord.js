const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let botembed = new Discord.RichEmbed()
    .setDescription('information bot')
    .setColor('#005599')
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Nom du bot :", bot.user.username)
    .addField("Crée par :", `<@284302403975643146>`+" | alias Jean.D")
    .addField("Crée le :", bot.user.createdAt);
    return message.channel.send(botembed);

}

module.exports.help = {
    name: "bot_info"
}
