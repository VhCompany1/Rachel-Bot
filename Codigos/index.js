const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json"); 

const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const { Client, MessageEmbed } = require('discord.js');
client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
        return;
    if (
        message.content.startsWith(`<@!${client.user.id}>`) ||
        message.content.startsWith(`<@${client.user.id}>`)
    )
        return;

    const args = message.content
        .trim()
        .slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error('Erro:' + err);
    }
});

client.on("ready", () => {
})

client.on("guildCreate", () => {
db.set(guild.id, []).write()
})


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  

  if(comando === "criar") {
    db.get("banimg")
    .push({
      id: message.author.id,
      link: "naodefinido"
    }).write()
    message.channel.send('Perfil criado com sucesso!')

    db.get("users")
    .push({
      id: message.author.id,
      nick: message.author.tag,
      xp: 0,
      level: 0
    }).write()

  }
  if(comando === "banimg"){
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('você é fraco, lhe falta permissão');
    if(!args[0])return message.channel.send('Você esqueceu do argumento ')
    let [novonome] = args
    db.get(message.guild.id)
    .find({id: "banimg"}).assign({link: novonome}).write()
    message.channel.send('Banimg editado com sucesso!') 
 }
  if(comando === "apagar"){
    db.get(message.guild.id).remove({id: message.author.id}).write()
  }

if(comando === "addxp") { //adicionar level a um usuario
if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('você é fraco, lhe falta permissão');
    if(!args[0])return message.reply('Mencione um usuario valido')
    if(!args[1])return message.reply('Mencione uma quantia valida de xp')
      let user = message.mentions.users.first() || client.users.cache.get(args[0]);
      let db1 = db.get('users').find({id: user.id}).value().xp
      let argsx = args[1]
      let newvalor = Number(argsx)
      let antvalor = Number(db1)
      let valorxp = antvalor + newvalor
      let valorlvl = db.get('users').find({id: user.id}).value().level
        db.get('users')
        .find({id: user.id}).assign({xp: valorxp}).write()
    message.reply(`xp adicionado com sucesso, agora o ${user} esta no level ${valorlvl} com ${valorxp} xp <a:XP:820799391068585984>`)
  } 

if(comando === "removexp") { //adicionar level a um usuario
if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('você é fraco, lhe falta permissão');
    if(!args[0])return message.reply('Mencione um usuario valido')
    if(!args[1])return message.reply('Mencione uma quantia valida de xp')
      let user = message.mentions.users.first() || client.users.cache.get(args[0]);
      let db1 = db.get('users').find({id: user.id}).value().xp
      let argsx = args[1]
      let newvalor = Number(argsx)
      let antvalor = Number(db1)
      let valorxp = antvalor - newvalor
      let valorlvl = db.get('users').find({id: user.id}).value().level
        db.get('users')
        .find({id: user.id}).assign({xp: valorxp}).write()
    message.reply(`xp removido com sucesso, agora o ${user} esta no level ${valorlvl} com ${valorxp} xp <a:XP:820799391068585984>`)
  } 

if(comando === "addlvl") { //adicionar level a um usuario
if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('você é fraco, lhe falta permissão');
    if(!args[0])return message.reply('Mencione um usuario valido')
    if(!args[1])return message.reply('Mencione uma quantia valida de level')
      let user = message.mentions.users.first() || client.users.cache.get(args[0]);
      let db1 = db.get('users').find({id: user.id}).value().level
      let argsx = args[1]
      let newvalor = Number(argsx)
      let antvalor = Number(db1)
      let valorlvl= antvalor + newvalor
      let valorxp = db.get('users').find({id: user.id}).value().xp
        db.get('users')
        .find({id: user.id}).assign({level: valorlvl}).write()
    message.reply(`level adicionado com sucesso, agora o ${user} esta no level ${valorlvl} com ${valorxp} xp <a:XP:820799391068585984>`)
  } 
 
  
});



  client.on('ready', () => {
      let activities = [
              `Utilize ${config.prefix}help para obter ajuda`
          ],
          i = 0;
      setInterval(
          () =>
              client.user.setActivity(`${activities[i++ % activities.length]}`, {
                  type: 'PLAYING'
                  }), 
                  
    1000 * 60
      );
      client.user.setStatus('indle').catch(console.error);
      console.log('Bot ligado com sucesso');
  });




  client.on("message", async message =>{ //sistema de xp
      if(db.get('users').find({id: message.author.id}).value() === undefined && !message.author.bot){
          message.reply ('Você não tem uma conta criada então criamos uma para você')
            db.get("users").push({
            id: message.author.id,
            nick: message.author.tag,
            xp: 0,
            level: 0
            }).write()
          
      }
      if(message.author.id != 655126745732612156){
      let db1 = db.get('users').find({id: message.author.id}).value().xp
      let antvalor = Number(db1)
      let valorlvl = db.get('users').find({id: message.author.id}).value().level
      let valorxp = antvalor++
        db.get('users')
        .find({id: message.author.id}).assign({xp: antvalor++}).write()

        let lvl = { 
            1: 100,
            2: 116,
            3: 172,
            4: 240,
            5: 280,
            6: 352,
            7: 436,
            8: 560,
            9: 640,
            10: 760,
            11: 840,
            12: 900,
            13: 1100,
            14: 1300,
            15: 1500,
            16: 1700,
            18: 1900,
            19: 2100,
            20: 2300,
            21: 2600,
            22: 2900,
            23: 3100,
            24: 3400,
            25: 3900,
            26: 4100,
            27: 4400,
            28: 4700,
            29: 4900,
            30: 5300,
            31: 5900,
            32: 6100,
            33: 6400,
            33: 6800,
            34: 7200
        } 

        for(let n = 0;n <= 100;n++){
            if(db1 == lvl[n]){       

                let Embed = new Discord.MessageEmbed() 
                    .setColor(`RANDOM`) 
                    .setTitle(`Level Up`) 
                    .setDescription(`O usuario ${message.author.tag} subiu para o level ${n}`)
                    .setImage(`https://media1.tenor.com/images/f59bf8981599e478f16d704b211a45b5/tenor.gif?itemid=12649755`) 
                    .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
                
                client.users.cache.get(message.author.id).send(Embed)
            }
        }}})



  client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("657843574028894220");
  let channel = await client.channels.cache.get("792834330187268116");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":AE_Uhul02:");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`<:AE_Uhul:749803547922661376> Boas-vindas <:AE_Uhul:749803547922661376>
      `)
      .setImage("https://cdn.discordapp.com/attachments/811427650295300108/811694109063774208/ee8e7f6b23839eb43d39c753e76228bd.gif")
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Código oficial de Animes Evolution")
      .setTimestamp();

    channel.send(embed);
  }
  });



  client.on("message", async message => {
      const regex = /(https?:\/\/)?(pt\.)?(pornhub\.(pt|com|pornhub)|pornhub\.com\/    a|porn\.com\/hub)\/.+[a-z]/gi;
      if (regex.exec(message.content)) {
        await message.delete({timeout: 1000});
          await message.channel.send(
            `${message.author} **você não pode postar link de sites pornograficos aqui!**`
          );
      }
    });

  client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
client.on('ready', () => {
    console.log(`${client.user.tag} logado.`);
});

client.on('messageDelete', message => {
    if(!message.partial) {
        const channel = client.channels.cache.get('823063903822413834');
        if(channel) {
            const embed = new MessageEmbed()
                .setTitle('Mensagem Excluída')
                .addField('Autor', `${message.author.tag} (${message.author.id})`, true)
                .addField('Canal', `${message.channel.name} (${message.channel.id})`, true)
                .setDescription(message.content)
                .setTimestamp();
            channel.send(embed);
        }
    }
});
