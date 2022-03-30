module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nothing is playing rn ;-; ${message.author}... try playing something ? ❌`);

        message.author.send(`You saved the track ${queue.current.title} | ${queue.current.author} from the server ${message.guild.name} ✅`).then(() => {
            message.channel.send(`I have sent you the title of the music by private messages ✅`);
        }).catch(error => {
            message.channel.send(`Can't send the message to you :c ${message.author}... try opening your DMs ? ❌`);
        });
    },
};