const Discord = require('discord.js')
const bot = new Discord.Client();
const fs = require("fs");
const { brotliCompressSync } = require('zlib');
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    console.log('Bot is online')

    fs.readdir('./commands', (err, files) => {
        if(err) return console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() == 'js');


        if(jsfile.length == 0) {return console.log("Could not find any commands!")}

        jsfile.forEach(f => {
            let props = require(`./commands/${f}`);
            bot.commands.set(props.help.name, props)
        })
    })
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '!';
    let MessageAray = message.content.split(' ');
    let cmd = MessageAray[0].slice(prefix.length)
    let args = MessageAray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot,message,args)}

})

bot.login("xxxxxx")
