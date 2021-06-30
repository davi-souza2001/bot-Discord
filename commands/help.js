const config = require('../config.json')
const commands = require("../scripts/CommandsReader")(config.prefix);

const descriptions = {
    "!clear": "Apaga todas as mensagens do canal!",
    "!ping": "Pinga o bot!",
    "!help": "Lista todos os comandos!"
};

module.exports = (client, msg) => {
    let text = "Comandos: \n";

    Object.keys(commands).forEach(command => {
        text += `\n ${command}: ${descriptions[command] ? descriptions[command] : "Não tem descrição" }`
    });

    msg.reply(text);
}
