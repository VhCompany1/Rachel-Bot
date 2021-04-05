const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')

exports.run = (bot, message, args) => {
  //não sei se botava module.exports.run ou usava esse msm entao só deixei

  let gAvatar = message.guild.iconURL
  let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setTitle(`${message.guild.name}`)
    .setThumbnail(gAvatar)
    .setColor(`#3F045A`)
    .setDescription(` <:info:814155947261427794> Informações do ${message.guild.name}`)
    .addField(`ID do servidor:`, message.guild.id, true)
    .addField(`Owner:`, message.guild.owner, true)
    .addField(`Região do servidor:`, message.guild.region, true)
    .addField(`Total de canais:`, message.guild.size, true)
    .addField(`Criado em`, moment(message.guild.createdAt).format('LLLL'))
    .addField(`Você entrou aqui em:`, moment(message.member.joinedAt).format('LLLL'))
    .addField(`Entrei aqui em:`, moment(bot.user.joinedAt).format('LLLL'))
    .addField('Total de membros:', message.guild.memberCount)
    .setFooter('Tdroid2.0#1542┃Droid tech company┃® all rights reserved');
   
  message.channel.send(embed);
}

exports.help = {
  
  name: "serverinfo"
}

//Droid tech Company Official code