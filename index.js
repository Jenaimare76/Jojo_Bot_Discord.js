//les constantes
    const Discord = require('discord.js');
    const bot = new Discord.Client();
    const lelo = require ('./Commandes/bruit/lelo')
    const omg = require ('./Commandes/bruit/omg')
    const taz = require ('./Commandes/bruit/taz')
    const yare = require ('./Commandes/bruit/yare')

//variabales
    var prefix = ('@Jojo'+' ')

//conection bot
    bot.on('ready', function () {
    //modifier son activite
        bot.user.setGame(prefix+"help");
        console.log("je suis de retour ");
    });
    
    //MESSAGE COMMANDE
    bot.on('message', async message => {
        if (message.author.bot) return;
        if (message.content.indexOf(config.prefix) !== 0) return;
         
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
//connection du bot
    bot.login(process.TOKEN);

//Commandes pour le bruit
    bot.on('bruit', function (message) {
       let commandUsed =  
        taz.parse(message) || 
        omg.parse(message) || 
        lelo.parse(message) || 
        yare.parse(message)
    })

//COMMANDE OPGGL
    if (command === "opggl") {
        const Name = args.join(" ");
        message.delete().catch(O_o => { });

        if (!Name) {
            message.delete();
            message.reply("Veuillez mettre un pseudo League Of Legends Valide ! " + "`" + config.prefix + "opggl [Pseudo]`").then(msg => msg.delete(5000))
        } else {
            message.delete();
            message.channel.send("http://euw.op.gg/summoner/userName=" + Name)
        }
    }

});