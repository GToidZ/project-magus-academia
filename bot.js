const { Client, Intents } = require("discord.js");

const createDiscordClient = (token) => {
    const client = new Client({ // Create a new Client object
        intents: [Intents.FLAGS.GUILDS]
    });
    client.login(token)
    .catch(err => { // Catch any login errors
        console.log("Login failed!")
        console.log(err)
    })
    .then(_ => {setupBot(client)}); // Setup if bot logins successfully
    return client;
};

const setupBot = (client) => {
    if (!(client instanceof Client)) { // Checks if client is discord.js Client
        throw "Cannot instantiate, not a discord.js Client";
    }
    client.once("ready", () => {
        console.log("Bot is now online!")
    });
    client.user.setPresence({ // Set presence of the bot. => Listening to /help
        activities: [
            {name: "/help", type: "LISTENING"}
        ],
        status: "online"
    });
}

exports.createDiscordClient = createDiscordClient;