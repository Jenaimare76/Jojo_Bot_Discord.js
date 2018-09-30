const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let servembed = new Discord.RichEmbed()
    .setDescription("information server")
    .setColor("#005599")
    .setThumbnail(message.guild.iconURL)
    .addField("Nom server :", message.guild.name)
    .addField("Crée le :", message.guild.createdAt)
    .addField("Vous avez join ce server le :", message.member.joinedAt)
    .addField("Nombre de membre total :", message.guild.memberCount);

    return message.channel.send(servembed);
}

module.exports.help = {
    name: "serverinfo"
}
