exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('learn how to build a car lz');} else {
        message.channel.send(`you are a ricer ${member.user.tag} suck my balls pls and get clean bitch pls`)
    }
  }
  
  exports.help = {
  name: 'ricer'
  }