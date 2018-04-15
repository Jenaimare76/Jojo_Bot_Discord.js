//les constantes
    const Discord = require('discord.js');
    const bot = new Discord.Client();

//variabales
    var prefix = ("@Jojo ")

//CONNECTION DU BOT
    bot.on('ready', function () {

    //ACTIVITE DU BOT
        bot.user.setGame("@Jojo help")
        console.log("je suis de retour ");
    });

//Command textuel
    bot.on('message', function (message) {
        if (message.content === ('!ping'){
            channel.reply('!pong')
            }
        
        if (message.content === ('!pong'){
            channel.reply('!ping')
            }
        })
            
//connection du bot
    bot.login(process.env.TOKEN);
