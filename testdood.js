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
  //compares the highest role of the author of a message to the rank chosen as a cut-off. If the author is above or equal to the chosen role, the function exits.
  var isAdmin = message.member.highestRole.comparePositionTo(message.guild.roles.get("roleID"));
  if (isAdmin >=0){return}
  //if the author is not above the chosen role, the else function converts the message text to lowercase, and checks for "Text required" inside the content. if it isn't found, it deletes the message.
  else{
  var string = message.content;
  var stringLow = string.toLowerCase();

  if (stringLow.includes("text required")){return}
  else {message.delete()};
}
}
);
