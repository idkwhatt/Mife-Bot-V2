const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("What shiningans are you trying to pull?");
let rM = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rM) return message.reply("User not found!");
if(!rM.id == 298567553180237824) return message.reply("Heccing nerd trying to remove the owner of this bots roles with their own bot.");
let role = args.slice(1).join(" ");
if(!role) return message.reply("Please specify a role!");
let roleg = message.guild.roles.find(`name`, role);
if (!roleg) return message.reply(`Role does not exist!`);
//console.log(roleg.name)
if(!rM.roles.has(roleg.id)) return message.reply("They don't have that role!");
await(rM.removeRole(roleg.id));



try{
 await rM.send(`You have been removed from the role: ${roleg.name}`)
    }catch(e){
    message.channel.send(`<@${rM.id}> has been removed from the role: ${roleg.name}`)
    }
};
module.exports.help = {
    name: "remrole"
}