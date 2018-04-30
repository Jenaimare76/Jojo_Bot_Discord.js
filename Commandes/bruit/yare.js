const CommandMap = require('../CommandMap')

module.exports =class yare extends CommandMap {
  static match (message) {
    return message.content.startsWith('@Jojo '+'yare')
  }
  
  static action (message) {
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice'})
      .first()
    voiceChannel
      .join()
      .then(function (connection) {
        connection.playFile('.../music/yare yare.mp3')
    })
  }

}