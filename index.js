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

//COMMANDES POUR FICHIER AUDIO
    function executeQueue(message, queue) {

        if (messsage.member.voiceChannel) {
            message.member.voiceChannel.join().then(connection => {
                resolve(connection);
            }).catch((error) => {
                message.reply("Vous n'êtes pas dans un channel vocal !")
                console.log(error);
            });
        }
     }
    
        //COMMANDE DU SON "OMG"    
        if (message.content === prefix +  "omg") {

            message.delete();
            if (message.member.voiceChannel === undefined) return message.reply(wrap("tu n'es pas sur : \n UN CHANNEL VOCAL \n FILS DE PUTE !"));
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.playFile('./music/omg.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                });
            })
            .catch(err => console.log(err));  
        }
