const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("What shiningans are you trying to pull?");
let rM = message.guild.member(message.mentions.users.first());// || message.guild.members.get(args[0]);
if(!rM) return message.reply("User not found!");
let role = args.slice(1).join(" ");
if(!role) return message.reply("Please specify a role!");
//let roleg = message.guild.roles.find('name', role);
let roleg = message.guild.roles.find(`name`, role);
//console.log(roleg.name)
if (!roleg) 
return message.reply(`Role does not exist!`);
if(rM.roles.has(roleg.id)) return message.reply("They already have that role!");
await(rM.addRole(roleg.id));



try{
 await rM.send(`You have been given the role: ${roleg.name}`)
    }catch(e){
    message.channel.send(`<@${rM.id}> has been given the role: ${roleg.name}`)
    }
};
module.exports.help = {
 name: "addrole"
}