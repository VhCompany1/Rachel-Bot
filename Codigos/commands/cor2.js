Discord = require("discord.js");
const { prefix } = require("../config.json")

module.exports.run = async (client, message, args) => {
  const HelpEmbed = new Discord.MessageEmbed()
    .setColor("#7FFFD4")
    .setTitle(`**COLOR LIST 2**`)
    .setDescription(`
     Torakuta:
    •Vermelho
    •Lava
    •Verde-Spring
    •Green
    •Neve
    •Azul-Celeste
    •Marrom
    •Indigo
    •Laranja
    •Azul-Royal   
    
    *use !cor3 para proxima página*   
      `)
      .setImage(`https://cdn.discordapp.com/attachments/811427650295300108/811689470625185892/CORES.gif`)
      .setFooter('Codigo Oficial de Animes Evolution')
      .setTimestamp();

  message.channel.send(HelpEmbed)
};
console.log('alguem usou o comando cor2')

