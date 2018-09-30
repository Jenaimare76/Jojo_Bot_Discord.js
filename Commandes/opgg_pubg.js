const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const Name = args.join(" ");
    message.delete().catch(O_o => { });

    if (!Name) {
        message.delete();
        message.reply("Veuillez entrer un pseudo PUBG valide ! " + "`" + config.prefix + "opgg"+"pubg + [Pseudo]`").then(msg => msg.delete(5000))
    } else {
        message.delete();
        message.channel.send("https://pubg.op.gg/user/" + Name)
    }
}

module.exports.help = {
    name: "opggp"
}


