const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

module.exports = {
    config: {
        name: "ban",
        aliases: ['banir', 'dar-ban'],
        description: "Bana um membro",
        example: '#ban @User#1000',
        usage: '#ban <user>'
    },
    run: async(bot, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('você é fraco, lhe falta permissão');
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply('eu preciso de permissão para isso!');

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply('você precisa mencionar um Renegado por favor!');
        if (member === message.member) return message.reply('você não pode se banir!');

        let motivo = args.slice(1).join(" ");
        if (!motivo) return message.reply('você precisa dar um motivo por favor!');

        let canal = message.guild.channels.cache.get(message.channel.id);
        let banimage = db.get(banimg).find({id: message.author.id}).value().link

        canal.send(`Membro banido: ${member}\nStaff: ${message.author}\nMotivo: ${motivo}\n${banimage}`);
        member.ban();
    }
}
console.log('alguem usou o comando ban')