const commandes = require ("./Commandes")
const Discord = require ("discord.js").

var prefix = prefix (./index.js)

if (message.content === prefix +"omg") {
  
   message.delete();
            if (message.member.voiceChannel === undefined) return message.reply(wrap("t'es pas dans un channel vocal gros boulet va !"));
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.playFile('./music/omg.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                });
            })
            .catch(err => console.log(err)); 
}
