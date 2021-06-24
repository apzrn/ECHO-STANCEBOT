exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You are not an admin!")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send("Invalid Member Given!");
    if(member.roles.highest.position > message.member.roles.highest.positon) return message.channel.send("This user is a higher role than you!")
    let reason = args.slice(1).join(' ');
    if(!reason) (reason = 'No Reason Provided!')
    member.ban({reason: reason, days: 7})
    message.channel.send(`**${member.user.tag}** has been kicked for${reason} `)
  }
  
  exports.help = {
  name: 'ban'
  }