const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.tenor.com/images/6dbd997e3e79f21b7841b244833325c0/tenor.gif',
  'https://miro.medium.com/max/704/1*0-ofMX42qArZeo8hhl9j4Q.gif',
  'https://pa1.narvii.com/6786/5caf5e3ccc1a48f6681271f398d9c322da2cca3e_00.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811459154211897394/gif_196.gif',
  'https://cdn.discordapp.com/attachments/811427650295300108/811459110452330506/gif_210.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa...!');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Tapa')
        .setColor('#FF0000')
        .setDescription(`${message.author} acaba de dar um tapa no ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('VhCompany#2933┃Droid tech company┃®all copyrights have been reserved')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}