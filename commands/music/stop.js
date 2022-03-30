module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nothing is playing rn ;-; ${message.author}... try playing something ? ❌`);

        queue.destroy();

        message.channel.send(`Aww guess thats it for today, see you next time :3 👋`);
    },
};