const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Chute qualquer um com um tiro",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
  const content = args.join(" ");
  
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Você não tem permissão suficiente para usar este comando`)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Eu não tenho permissão suficiente para usar este comando`)
    }
    
    let target = message.tag.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Por favor, mencione a pessoa que você deseja expulsar`)
    }
    
    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, Você não pode se expulsar`)
    }
    
  if(!args[1]) {
    return message.channel.send(`**${message.author.username}**, Por favor, dê um motivo para expulsar`)
  }
    message.delete();
    let embed = new discord.MessageEmbed()
    .setTitle("Ação: Kick")
    .setDescription(`Expulso: ${target} (${target.id})
    motivo: ${content}`)
    .setColor("#ffffff")
    .setFooter(`Expulso por: ${message.author.username}`);
    
    message.channel.send(embed)
    
    target.kick(args[1]);
    
    
    
  }
}
