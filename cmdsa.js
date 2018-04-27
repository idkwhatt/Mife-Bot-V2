const Discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    fs.readdir("./Commands/", (err, files) => {
        if(err) console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0){
            console.log("Couldnt find commands!");
            return;
        }
        jsfile.forEach((f, i) =>{
            message.channel.send(`${f.split(".js")}`)
        });
    });

};
module.exports.help = {
    name: "cmds"
}