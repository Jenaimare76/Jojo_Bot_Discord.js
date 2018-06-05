const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("vous ne posséder pas la permision requise !");
    if(!args[0] || args[0 == "help"]) return message.reply("utlise: ``j!prefix <nouveau prefix>``");

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let prefixEmbed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setTitle("Prefix modifier !")
    .setDescription(`modifier en "${args[0]}"`);

    message.channel.send(prefixEmbed);

}

module.exports.help = {
    name: "prefix"
}