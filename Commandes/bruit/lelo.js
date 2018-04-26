const CommandMap = require('../CommandMap')

module.exports =class lelo extends CommandMap {
  static match (message) {
    return message.content.startsWith('@Jojo '+'lelo')
  }
  
  static action (message) {
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice'})
      .first()
    voiceChannel
      .join()
      .then(function (connection) {
        connection.playFile('.../music/lelo.mp3')
    })
  }
  
}
