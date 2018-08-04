const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json" ||"./tokenlog.json");
const botconfig = require("./botconfig.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commandes = new Discord.Collection();
let coins = require("./coins.json");

//moteur
fs.readdir("./Commandes/", (err, files) =>{
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Commande non détecter !");
        return; 
    }

    jsfile.forEach((f, i) => {
        let props = require(`./Commandes/${f}`);
        console.log(`${f} Chargée !`);
        bot.commandes.set(props.help.name, props);
    });
});

//moteur player
fs.readdir("./Commandes/player/", (err, files) =>{
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Commande non détecter !");
        return; 
    }

    jsfile.forEach((f, i) => {
        let props = require(`./Commandes/player/${f}`);
        console.log(`${f} Chargée !`);
        bot.commandes.set(props.help.name, props);
    });
});


//bot setup
bot.on("ready", async () => {
    console.log(`${bot.user.username} est en ligne !! ;) ✅
`);
    bot.user.setActivity(botconfig.prefix+"help"+" | "+botconfig.prefixadmin+"help", {type: "STREAMING"});
    bot.user.setStatus("online");
});

//prefix(es) & coins
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }

    ////coins
    //if(!coins[message.author.id]){
    //    coins[message.author.id] = {
    //        coins: 0
    //    };
    //}
    //
    //let coinAmt = Math.floor(Math.random()* 15) + 1;
    //let baseAmt = Math.floor(Math.random()* 15) + 1;
    //console.log(`${coinAmt} ; ${baseAmt}`);
//
    //if(coinAmt === baseAmt){
    //    coins[message.author.id] = {
    //        coins: coins[message.author.id].coins +coinAmt
    //    };
    //fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    //    if (err) console.log(err)
    //});
    //let coinEmbed = new Discord.RichEmbed()
    //.setAuthor(message.author.username)
    //.setColor("#002525")
    //.addField(`${coinAmt} 💴 ajouter dans ton atm 💳`)
    //
    //message.channel.send(coinEmbed).then(msg => {msg.delete(50000)})
    //}

    let prefix = (prefixes[message.guild.id].prefixes) || (botconfig.prefix);

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commandes.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
});

//connection bot
bot.login(tokenfile.token);