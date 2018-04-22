const commande = require('../CommandMap')

module.export =class omg extends commande{
    
  static match (message) {
    return message.content.startsWith('@Jojo omg')
  }
  
  static action (message) {
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice'})
      .first()
    voiceChannel
      .join()
      .then(function (connection) {
        connection.playFile('./music/omg.mp3')
    })
  }
  
}
