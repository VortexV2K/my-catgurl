module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Nothing is playing rn ;-; ${message.author}... try playing something ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Current music ${queue.current.title} paused ✅` : `Nya! Something bad happended ${message.author}... try again ? ❌`);
    },
};