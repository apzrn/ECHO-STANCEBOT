exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('do you want corona?');} else {
        message.channel.send(`${member.user.tag} you are now infected with covid`)
    }
  }
  
  exports.help = {
  name: 'coivd'
  }