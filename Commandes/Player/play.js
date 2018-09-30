const Discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args, queue, serverQueue) => {
    
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send('sory mais tu n\'es pas dans un channel vocal');
    const permisions = voiceChannel.permissionsFor(message.client.user);

    if (!permisions.has('CONNECT')) {
        return message.channel.send('je ne peux pas rejoindre votre channel');
    }
    if (!permisions.has('SPEAK')) {
        return message.channel.send('je ne peux pas parler avec vous, je ne possede pas l\'autorisation');
    }
    const songInfo = await ytdl.getInfo(args[0]);
    const song = {
        title : songInfo.title,
        url : songInfo.video_url,
    };
    if(!serverQueue){
        const queueConstruct = {
            textchannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 75,
            playing: true
        };

        queue.set(message.guild.id, queueConstruct);

        queueConstruct.songs.push(song);
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`une erreur est presente : ${error}`);
            queue.delete(message.guild.id);
            return message.channel.send(`je ne peux pas rejoindre ce channel vocale : ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        return message.channel.send('**${song.title}** a bien ete ajouter a la file')
    }
    return undefined;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if(!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    console.log(serverQueue.songs);

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('son terminer');
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        });
        dispatcher.on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
}

module.exports.help = {
    name: "play",
    description: "joue de la music dans un channel vocal",
}