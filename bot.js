const Discord = require('discord.js');

const client = new Discord.Client();

 
client.on('ready', () => {

    console.log('I am ready!');
    }
});
const prefix = "?";
client.on("message", (message) => {
	  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!");
  } else
	  if (message.content.startsWith(prefix + "am i manly")) {
    message.channel.send("Yes, you are manly! :thumbsup:");
  }
});
client.login(process.env.BOT_TOKEN);
