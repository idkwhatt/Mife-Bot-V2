const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
     let BUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!BUser) return message.reply("User not found!");
    let BReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("What shinanigins are you trying to pull?");
   //let adminrole = message.guild.roles.find("name", "Administrator")
//if(!message.member.roles.has(adminrole.id)) return message.reply("Fat cow");
    if(BUser.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't ban this user!(You both have Ban permissions)");//hasPermission("BAN_MEMBERS")) return message.channel.send("You can't ban this user!(You both have Ban permissions)");
    
    let BE = new Discord.RichEmbed()
    .setDescription("=BAN=")
    .setColor("#6cd8d8")
    .addField("Banned user", `${BUser}`)
    .addField("Banned by", `<@${message.author.id}>`)
    .addField("Time", message.createdAt)
    .addField("Reason", BReason);
    
    let C = message.channel;
    C.send(BE);
    message.guild.member(BUser).ban(BReason);
}
module.exports.help = {
    name: "ban"
}