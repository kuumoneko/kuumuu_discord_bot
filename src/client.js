const discord = require('discord.js');
const map = require('collections/map.js');
const { Player } = require('discord-player');
const { ChatBot: EdgeChatBot } = require('bingai-js');
const { ChatBot: BardChatBot } = require('googlebard-js')
const { SpotifyExtractor, YouTubeExtractor, SoundCloudExtractor } = require('@discord-player/extractor');

// const cookies = require('../database/cookies.json');

class discordClient {
    constructor(data) {
        /**
         * data = {
         *      name: str,
         *      prifix: str,
         *      cookie: [],
         *      cookie_U : str,
         * }
         */
        this.name = data.name
        this.version = "v0.7.0"
        this.prefix = data.prefix
        this.client = new discord.Client({
            intents: Object.keys(discord.GatewayIntentBits).map((a) => {
                return discord.GatewayIntentBits[a];
            }),
        });

        this.player = new Player(this.client, {
            ytdlOptions: {
                quality: 'highestaudio',
            },

        })


        this.ctrack = new map();
        this.ptrack = new map();

        this.isloop = new map();

        // You can add more colors here
        this.color = [
            0xCD5C5C, 0xFF6A6A, 0xEE6363, 0xCD5555, 0x8B3A3A, 0xB22222, 0xFF3030, 0xEE2C2C, 0xCD2626, 0x8B1A1A, 0xA52A2A, 0xFF4040, 0xEE3B3B,
            0x8B2323, 0xFF8C00, 0xFF7F00, 0xEE7600, 0xCD6600, 0xFF6347, 0xEE5C42, 0xFF4500, 0xEE4000, 0xFF0000, 0xEE0000, 0xDC143C, 0xCD3333,
        ]

        var cookie = ""

        data.cookies.forEach((coookie) => {
            cookie += `${coookie.name}=${coookie.value};`
        })


        this.BardChatBot = new BardChatBot(cookie);
        this.EdgeChatBot = new EdgeChatBot(data.cookie_U);
    }

    get_color() {
        var rand = Math.floor(Math.random() * (this.color.length))

        return this.color[rand];
    }

    async setup() {
        await this.player.extractors.loadDefault();
        await this.player.extractors.register(SpotifyExtractor, {});
        await this.player.extractors.register(SoundCloudExtractor, {});
        await this.player.extractors.register(YouTubeExtractor, {});
        await this.BardChatBot.getAPI();
    }

}

module.exports = discordClient