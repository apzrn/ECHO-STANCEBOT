exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('Clean Stance Meet Right Now - Message for Invite');} else {
        message.channel.send(`Clean Stance Meet Right Now - Message for Invite ${member.user.tag}`)
    }
  }
  
  exports.help = {
  name: 'meet'
  }