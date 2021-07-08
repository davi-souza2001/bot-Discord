const Discord = require('discord.js');

const client = new Discord.Client();
const config = require("./config.json");

const commands = require("./scripts/CommandsReader")(config.prefix);

client.on("ready", () => {
    console.log(`Logado com o bot ${client.user.tag}`);
})

client.on("message", (msg) => {
    if (!msg.author.bot && msg.content.charAt(0) == config.prefix) {
        const verifyContent = msg.content.split(" ");
        
        if (commands[verifyContent[0]]) {
            commands[verifyContent[0]](client, msg);
        } else {
            msg.reply("Este comando não existe!");
        }
        
    } 

    console.log(`Author: ${msg.author.username}: ${msg.content}`);
});

client.login(config.token);

