exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('Crew Outfit - With Names - #crewoutfit');} else {
        message.channel.send(`
        Crew Outfit:

        Hats - Any
        
        Mask - Any
        
        Tops - Black Utility Top
        
        Pants - Black Low Crotch Pants or Black Joggers
        
        Shoes ~ White Hi Top Sneakers or White Sport Shoes 
        
        Gloves ~ White Cotton Gloves`)

    }
  }
  
  exports.help = {
  name: 'outfit'
  }