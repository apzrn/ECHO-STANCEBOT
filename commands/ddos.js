exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('so you want no internet?');} else {
        message.channel.send(`your talktalk is now offline we have your ip lzzz get stressed dont try me ez fuck you lzz ${member.user.tag}`)
    }
  }
  
  exports.help = {
  name: 'ddos'
  }