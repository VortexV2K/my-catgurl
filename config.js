module.exports = {
    app: {
        px: '=',
        token: 'OTMwNzgzODAyMjA3Mzk1ODUw.Yd659w.m_oi5IfP3q94xu-BRdrxsOd4WQU',
        playing: 'Watching chats'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
