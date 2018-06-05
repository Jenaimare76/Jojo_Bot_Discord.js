const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const Name = args.join(" ");
    message.delete().catch(O_o => { });
    
    if (!Name) {
        message.delete();
        message.reply("Veuillez mettre un pseudo League Of Legends Valide ! " + "`" + config.prefix + "opgg"+"lol + [Pseudo]`").then(msg => msg.delete(5000))
    } else {
        message.delete();
        message.channel.send("http://euw.op.gg/summoner/userName=" + Name)
    }

}

module.exports.help = {
    name: "opggl"
}


