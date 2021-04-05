const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811457195828314112/kiss_025.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811457728735871016/kiss_123.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811457729096318977/kiss_088.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(${message.author.username} **acaba de beijar** ${user.username}! :heart:, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(' 🥰 🥰 🥰 🥰 ')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}