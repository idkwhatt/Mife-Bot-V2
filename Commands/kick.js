const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
     let KUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!KUser) return message.reply("User not found!");
    let KReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("What shinanigins are you trying to pull?");
    if(KUser.hasPermission("KICK_MEMBERS")) return message.channel.send("You can't kick this user!(You both have Kick permissions)");//hasPermission("BAN_MEMBERS")) return message.channel.send("You can't ban this user!(You both have Ban permissions)");
    
    let KE = new Discord.RichEmbed()
    .setDescription("=KICK=")
    .setColor("#6cd8d8")
    .addField("Kicked user", `${KUser}`)
    .addField("Kicked by", `<@${message.author.id}>`)
    .addField("Time", message.createdAt)
    .addField("Reason", KReason);
    
    let C = message.channel;
    C.send(KE);
    message.guild.member(KUser).kan(KReason);
}
module.exports.help = {
    name: "kick"
}