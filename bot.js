const Discord = require('discord.js');

const client = new Discord.Client();

 
client.on('ready', () => {

    console.log('I am ready!');
});
client.on("message", (message) => {
  if (message.content.startsWith("Kirishima")) {
    message.channel.send("Hi! :D");
  } else
	   if (message.content.startsWith("kirishima")) {
    message.channel.send("Hi!");
		 } else
	   if (message.content.startsWith("KIRISHIMA!")) {
    message.channel.send("Hey Bakugou!");
		    } else
if (message.content.startsWith("Tch.")) {
    message.channel.send("I am! Thank you person!");
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
