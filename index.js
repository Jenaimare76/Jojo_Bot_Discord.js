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
        bot.user. setImage(.\image\photo jotaro.jpg)
    });

//connection du bot
    bot.login(process.env.TOKEN);          
