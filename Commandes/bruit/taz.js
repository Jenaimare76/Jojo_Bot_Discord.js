const CommandMap = require ("../CommandMap")

module.exports = class taz extends CommandMap {

  static match (message) {
    return message.content.startsWith('='+'taz')
  }

  static action (message) {
    let voiceChannel = message.guild.channels
      .filter(function(channel) {
        return channel.type === 'voice'
      })
      .first()
    voiceChannel
      .join()
      .then(function (connection) {
        connection.playFile('.../music/tazer.mp3')
      })
      .catch(console.error);
    message.delete(1);
  }

}

