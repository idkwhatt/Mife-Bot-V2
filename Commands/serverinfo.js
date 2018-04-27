const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#6cd8d8")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created on", message.guild.createdAt)
    .addField("You joined on", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);
    return message.channel.send(serverembed)
};
module.exports.help = {
    name: "serverinfo"
}