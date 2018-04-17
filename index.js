//les constantes
    const Discord = require('discord.js');
    const bot = new Discord.Client();

//variabales
    var prefix = ("@Jojo ")

//CONNECTION DU BOT
    bot.on('ready', function () {

    //ACTIVITE DU BOT
        bot.user.setGame("@"+ "Jojo" + " help");
        console.log("je suis de retour ");
    });

//connection du bot
    bot.login(process.env.TOKEN);          

//COMMANDE DU SON "OMG"    
     if (message.content === prefix +  "omg") {
 
         message.delete();
         if (message.member.voiceChannel === undefined) return message.reply(wrap("Vous n\'êtes pas dans un channel vocal !"));
         voiceChannel.join().then(connection =>{
             const dispatcher = connection.playFile('./music/omg.mp3');
             dispatcher.on("end", end => {
                 voiceChannel.leave();
             });
         })
         .catch(err => console.log(err));  
     }
