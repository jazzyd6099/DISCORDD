const Discord = require('discord.js');
const client = new Discord.Client();


function doMagic8BallVoodoo() {
    var rand = [
    " A friend!",
    " A person I workout with!",
    " A brother/sister!",
    " My bestfriend!",
    " my crush :blush:",
    " My wife/husband! Mwah! :kiss:",
    " Someone who I thought was cute on the street.",
    " A rival.",
    " My homework buddy!",
    " Someone I can count on!",
    " A classmate!",
    " My soulmate.",
    " A stalker.",
    " My ex.",
    " My daughter/brother!",
    " My mother/father.",
    " A stranger! Who are you?",
    " Someone annoying.",
    " A fun person to hang around!",
];

    return rand[Math.floor(Math.random()*rand.length)];
}


client.on('ready', () => {
    console.log('I am ready!');
 

	client.user.setPresence({ game: { name: 'Currently working out!' }, status: 'idle' })
  .then(console.log)
  .catch(console.error);

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
		} else
		if (message.content.startsWith("i hate myself")) {
			message.reply("Aw don't hate yourself. You're a manly person!");
			} else
		if (message.content.startsWith("i hate myself")) {
			message.reply("Don't hate yourself! I love you!");
			 } else 
	 if (message.content == "Is there anybody online?".toLowerCase() || message.content == "Is there anybody online?" || message.content == "Is anybody online?".toLowerCase() || message.content == "Is anybody online".toLowerCase()){
     	   message.channel.send("I'm online! :D");
	 } else
		 if (message.content == "Hello." || message.content == "hi.".toLowerCase()){ 
		     message.reply("Hello! How are you?");
		     } else
		    if (message.content == "good".toLowerCase() || message.content == "Good.".toLowerCase()){
			    message.reply("That's good! :DD");
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
			  	    	} else
			if (message.content.startsWith(prefix + "hug")) {
				let huggedUser = message.mentions.users.first();
            
            if(message.mentions.users.size < 1) return message.reply("You forgot to name someone to hug!");
            message.reply("You just hugged " + huggedUser);
			} else
				if (message.content.startsWith(prefix + "what am i to you")) {
					message.reply('You are' + doMagic8BallVoodoo());
  }
});
client.login(process.env.BOT_TOKEN);
