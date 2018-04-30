const CommandMap = require ("../CommandMap")

module.exports =class jotaropng extends CommandMap {
    static match (message) {
        return message.content.startsWith( '=' +'jojopng')
    }
    
    static action (message) {
        channel.send({
            files: [{
              attachment: '../image/photo jotaro.png',
              name: 'jotaro.png'
            }]
          })
            .then(console.log)
            .catch(console.error);
  }
}