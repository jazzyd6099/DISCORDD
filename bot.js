const Discord = require('discord.js');
const client = new Discord.Client();

 
client.on('ready', () => {

    console.log('I am ready!');
	
client.user.setActivity(“Currently working out!”, {type: “WATCHING”});﻿
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
} else
	if (message.content.startsWith("prefix?")) {
	message.channel.send("Mine is '?'");
	} else
	if (message.content.startsWith("I love my bot family")) {
	message.channel.send("Aw, I love you too! :D");
     }
  });
const prefix = "?";
client.on("message", (message) => {
	  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!");
  } else
	  if (message.content.startsWith(prefix + "am i manly")) {
    message.reply("you are manly! :muscle:");
	  } else
		  if (message.content.startsWith(prefix + "how is bakugou")) {
			  message.reply("Bakugou is doing just fine!");
  }
});
client.login(process.env.BOT_TOKEN);
