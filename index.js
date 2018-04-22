//les constantes
    const Discord = require('discord.js');
    const bot = new Discord.Client();

//variabales
    var prefix = ("@"+"Jojo"+" ")

//conection bot
    bot.on('ready', function () {
    //modifier son activite
        bot.user.setGame("@"+ "Jojo" + " " + "help");
        console.log("je suis de retour ");
    });

//connection du bot
    bot.login(process.env.TOKEN);          

//commande pour le bruit
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
     //taz   
        if ('message'.content === prefix +  "taz") {
            message.delete();
            if (message.member.voiceChannel === undefined) return message.reply(wrap("tu n'es pas sur : \n UN CHANNEL VOCAL \n FILS DE PUTE !"));
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.playFile('./music/tazer.mp3');
                dispatcher.on("end", end => {
                    voiceChannel.leave();
                });
            })
            .catch(err => console.log(err));  
        }
