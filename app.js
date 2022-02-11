require('dotenv').config();
const bot = require('./bot').createDiscordClient(process.env.DISCORD_TOKEN);
