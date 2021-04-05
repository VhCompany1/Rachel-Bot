module.exports.run = async (client, message, args) => {
  const m = await  message.channel.send ('ping?');
  
  m.edit(`:ping_pong: **| Pong! **\nLatencia do Server: **${m.createdTimestamp - message.createdTimestamp}ms.**\nLatencia da API: **${Math.round(client.ws.ping)}ms**`);
};
console.log('o comando ping foi utilizado')
