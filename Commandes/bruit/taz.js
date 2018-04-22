const Commande = require('Jeanaimare/Jojo_Bot_Discord.js/Commandes/CommandMap.js')

module.exports =class taz extends Commande{
    
  static match (message) {
    return message.content.startsWith('@Jojo taz')
  }
  
  static action (message) {
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice'})
      .first()
    voiceChannel
      .join()
      .then(function (connection) {
        connection.playFile('./bruit/tazer.mp3')
    })
  }
  
}
