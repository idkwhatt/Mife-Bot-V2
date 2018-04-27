const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

let bicon =  bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription("Bot information")
.setColor("#6cd8d8")
.setThumbnail(bicon)
.addField("Developer(s):", "Scriviotic")
.addField("Bot name", bot.user.username);

message.channel.send(botembed);
};
module.exports.help = {
    name: "info"
}