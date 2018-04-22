//les constantes
    const Discord = require('discord.js');
    const bot = new Discord.Client();
    const taz = require ('./Commandes/bruit/taz')
    const omg = require ('./Commandes/bruit/omg')

//variabales
    var prefix = ("@"+"Jojo"+" ")
    var TOKEN = ('NDIzODg3NzA1MDY0MDc5MzYw.DbUKYQ.C7dZrgfXTQW7m6jUiAWiEDBNoXI')

//conection bot
    bot.on('ready', function () {
    //modifier son activite
        bot.user.setGame("@"+ "Jojo" + " " + "help");
        console.log("je suis de retour ");
    });

//connection du bot
    bot.login(process.env.TOKEN);

//Commandes pour le bruit
    bot.on('message', function (message) {
       let commandUsed = 
       taz.parse(message)||
       omg.parse(message)
    })
