const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
        let BUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!BUser) return message.reply("User not found!");
        let BReason = args.join(" ").slice(22);
        if(message.author.id != 298567553180237824) return message.reply("You can't use the command! It's Developer only!")
        
        let BE = new Discord.RichEmbed()
        .setDescription("=BAN=")
        .setColor("#6cd8d8")
        .addField("Banned user", `${BUser}`)
        .addField("Banned by", `<@${message.author.id}>`)
        .addField("Time", message.createdAt)
        .addField("Reason", BReason);
        
        let C = message.channel
        C.send(BE)
        message.guild.member(BUser).ban(BReason)
}
module.exports.help = {
    name: "bban"
}