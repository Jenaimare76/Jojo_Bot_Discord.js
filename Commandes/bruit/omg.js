const CommandMap = require('../CommandMap')

module.exports = class omg extends CommandMap {
  static match (message) {
    return message.content.startsWith('@jojo '+'omg')
  }
  
  static action (message) {
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice'})
      .first()
    voiceChannel
      .join()
      .then(function (connection) {
        connection.playFile('.../music/omg.mp3')
    })
  }

}