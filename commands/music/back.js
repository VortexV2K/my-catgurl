module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`There's nothing rn ;-; ${message.author}... try playing something ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Nothing is being played before this song tho ${message.author}... try play something ? ❌`);

        await queue.back();

        message.channel.send(`Starting **previous** track ✅`);
    },
};