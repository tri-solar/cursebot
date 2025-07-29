const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { token } = require('./config.json');

client.once('ready', () => {
    console.log("Logged in as", client.user.tag);
    console.log("Guilds:");
    client.guilds.cache.forEach(guild =>
        console.log(`${guild.name} (${guild.id})`)
    );
    process.exit(0);
});

client.login(token);
