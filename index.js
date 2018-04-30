//smile if you like hentai

//les constantes
const Discord = require('discord.js');
const bot = new Discord.Client();
const botrp = require('discord-rich-presence') ('423887705064079360');
const lelo = require ('./Commandes/bruit/lelo')
const omg = require ('./Commandes/bruit/omg')
const taz = require ('./Commandes/bruit/taz')
const yare = require ('./Commandes/bruit/yare')
const jojo1png = require('./Commandes/image/jotaropng')

//variabales
var prefix = ('=')
var prefixAdmin = ('@=')

//connection du bot
    bot.login(process.TOKEN);
    
    //rich Presence
    botrp.updatePresence({
        details: '~ '+ prefix +'help ~ | ~ '+ prefixAdmin +'help ~',
        state: 'si tu veux rejoind ma guild :',
        largeImageKey: 'la_guild',
        smallImageKey: 'madara_small',
        joinSecret: 'https://discord.gg/NaDhCMt' ,
        instance: true,
    });
    
    //conection bot
    bot.on('ready', function () {
    //modifier son activite
        bot.user.setStatus('dnd')
            .then(console.log)
            .catch(console.error);
            console.log("je suis de retour ");
        });
    
    //Commandes pour le bruit
    bot.on('bruit', function (message) {
        let commandUsed =  
        taz.parse(message) ||
        omg.parse(message) || 
        lelo.parse(message) || 
        yare.parse(message)
    });
    
    //Commandes pour des photo
    bot.on('image', function (message) {
        let commandUsed =  
        jojo1png.parse(message)
    });
    
//MESSAGE COMMANDE
    bot.on('message', async message => {
      if (message.author.bot) return;
      if (message.content.indexOf(config.prefix) !== 0) return;
      
      const command = args.shift().toLowerCase();
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

//COMMANDE OPGGL
    if(command === "opggl") {
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