const Discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("u cant do that sk1d");
    if(!args[0] || args[0] == "help") return message.reply("Usage: -setprefix <new prefix>");

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };


fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) =>{
    if (err) console.log(err)
});

message.channel.send(`Mife V2 prefix set to ${prefixes[message.guild.id].prefixes}`)

};
module.exports.help = {
    name: "setprefix"
}