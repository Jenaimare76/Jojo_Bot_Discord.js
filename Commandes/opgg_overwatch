const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const Name = args.join(" ");
    message.delete().catch(O_o => { });

    if (!Name) {
        message.delete();
        message.reply("Veuillez mettre un pseudo Overwatch ou BattleTag#1234 valide ! " + "`" + config.prefix + "opgg"+"o + [Pseudo]`").then(msg => msg.delete(5000))
    } else {
        message.delete();
        message.channel.send("https://overwatch.op.gg/search/?playerName=" + Name)
    }

}

module.exports.help = {
    name: "opggo"
}


