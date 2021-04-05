const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.discordapp.com/attachments/811427650295300108/811459721097773087/gif_6.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811459721419817010/gif_7.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811459925090762822/gif_5.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811460126988435496/gif_11.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811460504153358336/gif_1.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para acariciar...!');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Pat')
        .setColor('#FF0000')
        .setDescription(`${message.author} acaba de acariciar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('VhCompany#2933')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}