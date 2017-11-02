const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

//logs the client into Discord
client.login(config.token);
//Initiates the bot's listening capabilities, commands before client ready will not fire
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  var isAdmin = message.member.highestRole.comparePositionTo(message.guild.roles.get("roleID"));
  if (isAdmin >=0){return}
  else{
  var string = message.content;
  var stringLow = string.toLowerCase();

  if (stringLow.includes("text required")){return}
  else {message.delete()};
}
}
);
