const {
    ban_member, view_bans, chnick_member, chrole_member, deafen_member,
    kick_member, mute_member, timeout_member, undeafen_member, unmute_member, untimeout_member,
    join_voice, leave_voice, now_playing, pausing, play_music, see_queue,
    resuming, set_loop, shuffling, skipping, stopping, playing,
    ai,
    get_ping, get_status,
    discordClient
}
    = require('./src/index');


module.exports = {
    // CLient
    discordClient,
    // Moderator
    ban_member, view_bans, chnick_member, chrole_member, deafen_member,
    kick_member, mute_member, timeout_member, undeafen_member, unmute_member, untimeout_member,
    // Music
    join_voice, leave_voice, now_playing, pausing, play_music, see_queue,
    resuming, set_loop, shuffling, skipping, stopping, playing,
    // Ai
    ai,
    // Ultility
    get_ping, get_status
}