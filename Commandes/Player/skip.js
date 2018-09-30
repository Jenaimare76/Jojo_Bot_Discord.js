const Discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args, serverQueue) => {

    if(message.member.voiceChannel) return message.channel.send('vous n\'etes pas dans un channel vocal');
    if(!serverQueue) return message.channel.send('il n\'y a pas de piste a jouer');
    serverQueue.connection.dispatched.end();
    return undefined;

}

module.exports.help = {
    name: "skip",
    description: "",
}