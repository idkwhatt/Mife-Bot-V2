const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs")
bot.commands = new Discord.Collection();
fs.readdir("./Commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldnt find commands!");
        return;
    }
    jsfile.forEach((f, i) =>{
        let props = require(`./Commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props)
    });
});

bot.on("ready", async() => {
console.log(`${bot.user.username} is online!`);
bot.user.setActivity("Nothing! Get Clickbaited!", {type: "STREAMING"});
});

bot.on("message", async message => {
 if(message.author.bot) return;
 if(message.channel.type === "dm") return;

let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
        prefixes: botconfig.prefix
    };
}


 let prefix = prefixes[message.guild.id].prefixes;
 let messageArray = message.content.split(" ")
 let cmd = messageArray[0];
 let args = messageArray.slice(1);
 if(!cmd.includes(prefix)) return;
 let commandfile = bot.commands.get(cmd.slice(prefix.length));
 if(commandfile) commandfile.run(bot, message, args);
//  if(cmd === `${prefix}hello`){ 
//      return message.reply("Hello!");
//  }
//  if(cmd === `${prefix}info`){

// let bicon =  bot.user.displayAvatarURL;
// let botembed = new Discord.RichEmbed()
// .setDescription("Bot information")
// .setColor("#6cd8d8")
// .setThumbnail(bicon)
// .addField("Developer(s):", "Scriviotic")
// .addField("Bot name", bot.user.username);

// return message.channel.send(botembed);
//  }
//  if(cmd === `${prefix}serverinfo`){

//     let sicon = message.guild.iconURL;
//     let serverembed = new Discord.RichEmbed()
//     .setDescription("Server Information")
//     .setColor("#6cd8d8")
//     .setThumbnail(sicon)
//     .addField("Server Name", message.guild.name)
//     .addField("Created on", message.guild.createdAt)
//     .addField("You joined on", message.member.joinedAt)
//     .addField("Total Members", message.guild.memberCount);
//     return message.channel.send(serverembed)
//  }
//  if(cmd === `${prefix}kick`){
// let KUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
// if(!KUser) return message.reply("User not found!");
// let KReason = args.join(" ").slice(22);
// if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("What shinanigins are you trying to pull?");
// if(KUser.hasPermission("KICK_MEMBERS")) return message.channel.send("You can't kick this user!(You both have Kick permissions)")

// let KE = new Discord.RichEmbed()
// .setDescription("=Kick=")
// .setColor("#6cd8d8")
// .addField("Kicked user", `${KUser}`)
// .addField("Kicked by", `<@${message.author.id}>`)
// .addField("Time", message.createdAt)
// .addField("Reason", KReason);

// let C = message.channel
// C.send(KE)
// message.guild.member(KUser).kick(KReason)

//     return;
//  }
//  if(cmd === `${prefix}ban`){
//     let BUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//     if(!BUser) return message.reply("User not found!");
//     let BReason = args.join(" ").slice(22);
//     if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("What shinanigins are you trying to pull?");
//     if(BUser.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't ban this user!(You both have Ban permissions)")
    
//     let BE = new Discord.RichEmbed()
//     .setDescription("=BAN=")
//     .setColor("#6cd8d8")
//     .addField("Banned user", `${BUser}`)
//     .addField("Banned by", `<@${message.author.id}>`)
//     .addField("Time", message.createdAt)
//     .addField("Reason", BReason);
    
//     let C = message.channel
//     C.send(BE)
//     message.guild.member(BUser).ban(BReason)
    
//         return;
//      }
//      if(cmd === `${prefix}BBan`){
//         let BUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//         if(!BUser) return message.reply("User not found!");
//         let BReason = args.join(" ").slice(22);
//         if(!message.author.id === 298567553180237824) return message.reply("You can't use the command! It's Developer only!")
        
//         let BE = new Discord.RichEmbed()
//         .setDescription("=BAN=")
//         .setColor("#6cd8d8")
//         .addField("Banned user", `${BUser}`)
//         .addField("Banned by", `<@${message.author.id}>`)
//         .addField("Time", message.createdAt)
//         .addField("Reason", BReason);
        
//         let C = message.channel
//         C.send(BE)
//         message.guild.member(BUser).kick(BReason)
        
//             return;
//          }
});
bot.login(botconfig.token)