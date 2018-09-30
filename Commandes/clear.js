const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("vous ne possedez pas la permission demander !");
    if(!args[0]) return message.channel.send("oO");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Le(s) ${args[0]} message(s) sont supprimer ! \n vive la purge ^^`).then(msg => msg.delete(5000));
    });

}

module.exports.help = {
    name: "clear"
}
