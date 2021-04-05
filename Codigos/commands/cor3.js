Discord = require("discord.js");
const { prefix } = require("../config.json")

module.exports.run = async (client, message, args) => {
  const HelpEmbed = new Discord.MessageEmbed()
    .setColor("#7FFFD4")
    .setTitle(`**COLOR LIST 3**`)
    .setDescription(`
     Pro:
    •Azul-Celeste
    •Azul-Marinho
    •Azul-Claro
    •Azul-Turquesa
    •Azul-Royal
    •Azul-Neon
    •Azul
    •Azul-Escuro
    •Azul-Violeta
    •Violeta
    •Indigo
    •Púrpura
    •Roxo
    •Roxo-Claro
    •Rosa-Claro
    •Rosa-Médio
    •Rosa
    •Magenta
    •Vermelho-Salmão
    •Coral
    •Vermelho-Tomate
    •Vermelho-Escuro
    •Blood
    •Lava
    •Vermelho
    •Laranja-Escuro
    •Laranja
    •Laranja-Claro
    •Violeta
    •Ouro
    •Amarelo
    •Verde-Spring
    •Verde-Claro
    •Verde-Limão
    •Verde
    •Marrom
    •Cinza
    •Prata
    •Branco-Fantasma
    •Branco
    •Preto
    •Green
      `)
      .setImage(`https://cdn.discordapp.com/attachments/811427650295300108/811689470625185892/CORES.gif`)
      .setFooter('Codigo Oficial de Animes Evolution')
      .setTimestamp();

  message.channel.send(HelpEmbed)
};
console.log('alguem usou o comando cor3')

