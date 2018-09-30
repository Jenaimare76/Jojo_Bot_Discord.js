const Discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args, serverQueue) => {

    const voiceChannel = (message.member.voiceChannel);
    if(message.member.voiceChannel) return message.channel.send('vous n\'etes pas dans un channel vocal');
    if(!serverQueue) return message.channel.send('il n\'y a rien a stopper');
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    return undefined;

}
module.exports.help = {
    name: "stop"
}