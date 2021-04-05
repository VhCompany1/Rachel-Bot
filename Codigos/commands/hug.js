const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_145.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_138.gif',
  'https://loritta.website/assets/img/actions/hug/female_x_female/gif_149.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811445908607860796/gif_127.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811445909011038208/gif_130.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811445909417492520/hug_anime_conversacult.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811445969039523900/gif_126.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(${message.author.username} **acaba de beijar** ${user.username}! :heart:, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Hug')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de abraçar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(' 🥰 🥰 🥰 🥰 ')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
console.log('o comando Hug foi utilizado')