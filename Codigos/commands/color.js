const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var string = args.join(" ");
  var colors = [
    {name: "Azul-Celeste",id: "724511205997412433"},
    {name: "Azul-Marinho",id: "724512785035165706"},
    {name: "Azul-Claro",id: "724512428146163735"},
    {name: "Azul-Turquesa",id: "724513044213792858"},
    {name: "Azul-Royal",id: "724515981397065788"},
    {name: "Azul-Neon",id: "724526162625429576"},
    {name: "Azul",id: "724512292196319292"},
    {name: "Azul-Escuro",id: "724526767016247347"},
    {name: "Azul-Violeta",id: "727169989735612469"},
    {name: "Violeta",id: "727170793892610059"},
    {name: "Indigo",id: "727170154772955199"},
    {name: "Púrpura",id: "727172233340125278"},
    {name: "Roxo",id: "659620352694943794"},
    {name: "Roxo-Claro",id: "659619330463498252"},
    {name: "Rosa-Claro",id: "659617942303932436"},
    {name: "Rosa-Médio",id: "752397755800092712"},
    {name: "Rosa",id: "724527189973925920"},
    {name: "Magenta",id: "724527679239356447"},
    {name: "Vermelho-Salmão",id: "659619036073689088"},
    {name: "Coral",id: "727173101825163265"},
    {name: "Vermelho-Tomate",id: "727173215109120131"},
    {name: "Vermelho-Escuro",id: "727173746586288288"},
    {name: "Blood",id: "684154677360853021"},
    {name: "Lava",id: "659619144613756929"},
    {name: "Vermelho",id: "724527831975198761"},
    {name: "Laranja-Escuro",id: "727175103208620142"},
    {name: "Laranja",id: "724528100326506586"},
    {name: "Laranja-Claro",id: "659620954074513430"},
    {name: "Violeta",id: "800561744602726420"},
    {name: "Ouro",id: "727175652582621276"},
    {name: "Amarelo",id: "727175851531173890"},
    {name: "Verde-Spring",id: "727168481367294014"},
    {name: "Verde-Claro",id: "727169582451916800"},
    {name: "Verde-Limão",id: "727168781356630057"},
    {name: "Verde",id: "727169182025646081"},
    {name: "Marrom",id: "659618249549545513"},
    {name: "Cinza",id: "727177518964146286"},
    {name: "Prata",id: "727176050978586706"},
    {name: "Branco-Fantasma",id: "727176332752191519"},
    {name: "Branco",id: "727176759765631007"},
    {name: "Preto",id: "727176975281684500"},
    {name: "Green",id: "757083868133326958"}

  ];
  var names = colors.map(function(item) {
    return item["name"].toLowerCase();
  });
  var ids = colors.map(function(item) {
    return item["id"];
  });

  var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

  if (!args[0]) {
      return await message.channel.send(`${message.author}, escreva o nome da cor após o comando.`);
  } else if (args[0].toLowerCase()  === "remove") {
      await message.member.roles.remove(ids);
      return await message.channel.send(`${message.author}, suas cores foram resetadas ao padrão.`);
  } else if (!names.includes(string.toLowerCase()) || !role) {
    return message.channel.send(
      `${message.author}, não existe cores com o nome ${string} neste servidor.`
    );
  } else {
    try {
      await message.member.roles.remove(ids);
      await message.member.roles.add(role);
      return await message.channel.send(`${message.author}, agora você ganhou a cor ${string}`);
    } catch (err) {
      console.error("Erro: " + err);
    }
  }
};