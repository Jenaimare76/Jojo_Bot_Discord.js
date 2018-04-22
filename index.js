//les constantes
    const Discord = require('discord.js');
    const bot = new Discord.Client();
    const taz = require ('./Commandes/bruit/taz')

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

//Commandes
bot.on('message", function (message) {
       let commandUsed = taz.parse(message)
})
