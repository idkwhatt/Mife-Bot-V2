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
});
bot.login(process.env.NDM4NDU0MTM5OTcwOTEyMjY2.DcE10Q.FYQ_JVzK8fk-fJtOiLXt3FHSW80)
