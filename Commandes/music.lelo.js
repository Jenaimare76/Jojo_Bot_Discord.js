const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice'})
      .first()
    voiceChannel
      .join()
      .then(function (connection) {
        connection.playFile("../music/lelo.mp3")
    })
  }

module.exports.help = {
  name: "lelo"
}