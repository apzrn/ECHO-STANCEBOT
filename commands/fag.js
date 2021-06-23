exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('mystic have cigarette');} else {
        message.channel.send(`${member.user.tag} mystic give you fag for free he got from another uk roadman smoke it please`)
    }
  }
  
  exports.help = {
  name: 'fag'
  }