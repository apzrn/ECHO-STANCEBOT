exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('Fuck you');} else {
        message.channel.send(`Fuck you ${member.user.tag}`)
    }
  }
  
  exports.help = {
  name: 'fu'
  }