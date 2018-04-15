const commandes = require ("./Commandes")
const Discord = require ("discord.js").

var prefix = ("@"+"Jojo ")

if (message.content === prefix +  "omg") {
  
   message.delete();
            if (message.member.voiceChannel === undefined) return message.reply(wrap("Vous n\'êtes pas dans un channel vocal !"));
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.playFile('./Audio/omg.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                });
            })
            .catch(err => console.log(err)); 
}
