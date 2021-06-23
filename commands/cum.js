exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('you are brewing my jizz');} else {
        message.channel.send(`ahh shizzz tha jizzz on your face i cum in your pussy ${member.user.tag}`)
    }
  }
  
  exports.help = {
  name: 'cum'
  }