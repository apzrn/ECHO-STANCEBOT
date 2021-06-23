exports.run = async (bot,message,args) => {
  let member = message.mentions.members.first();
  if(!member) { message.channel.send('Crew Colour Changed! - Restart Game to Take Effect!');} else {
      message.channel.send(`Crew Colour Changed! - Restart Game to Take Effect! ${member.user.tag}`)
  }
}

exports.help = {
name: 'colour'
}