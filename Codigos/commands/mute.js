/*
os comentários feitos pertencem a call:

Avera uns tempos de demora para escrever pois estou tentando lembrar da aula.
*/
const Discord = require('discord.js')
const ms = require('ms')
//baixe a dependência ms(no terminal digite npm i ms ou va em pacotes e instale)


//vou substituir por module.exports...

module.export.run = async (client, message, args) => {
  
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  let reason = args.slice(2).join('');
  if(!reason) reason = "Nenhuma razão definida";
  
  let tomute = message.guild.member(message.mentions.user.first()) || message.guild.members.get(args[0]);
  if(!tomute) return message.reply('Mencione um membro valido para mutar')
  if(!message.member.hasPermision('MANEGE_MESSAGES')) return message.reply('Você é fraco! lhe falta Permissão de gerenciar mensagens')
  let muterole = message.guild.roles.find('name:, "Mute')
  
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "⚠️┃Mute",
        color: "#3F045A",
        permisions: []
      })
      message.guild.channels.forCach(async (channel, id) => {
        await channels.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutetime = args[1]
  if(!mutetime) return message.reply("coloque um tempo válido!")
  
  await(tomute.addRole(muterole.id));
  
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<${tomute.id}> foi desmutado.`)
  },ms(mutetime))
  let embed = new Discord.RichEmbed()
  .setTitle(`Mute!`)
  .addField(`Membro mutado:`, `${member.usrr.tag}`)
  .addField(`mutado por:`, `${message.author.tag}`)
  .addField(`Motivo:`, `${reason}`)
  .addField(`Duração:`, `${mutetime}`)
  .setFooter('Tdroid2.0#1542┃Droid tech Company')
  .setColor("#3F045A")
  .setTimestamp()
  
  message.channels.send(embed)
}