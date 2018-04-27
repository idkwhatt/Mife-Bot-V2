const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if(message.author.id != 298567553180237824) return message.reply("You can't use the command! It's Developer only!");
    let aaa = args.join(" ");
message.channel.send(aaa);
};
module.exports.help = {
    name: "say"
}