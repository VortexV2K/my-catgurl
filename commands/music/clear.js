module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`There's nothing rn ;-; ${message.author}... try playing something ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`There's nothing in the queue after the current one ${message.author}... try playing something ? ❌`);

        await queue.clear();

        message.channel.send(`Poof! Queue is gone! 🔥`);
    },
};