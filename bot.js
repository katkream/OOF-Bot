const Discord = require('discord.js');
const client = new Discord.Client();
const token = '';


client.login(token).then().catch(err=>console.log(err));
client.on('message', message =>{
	const voiceChannel = message.member.voiceChannel;
	// if the message is the bot's then it leaves.
	if(message.author.bot) return;

	var message123 = false;
	if (message.content.substring(0, 1) == '?') {
		if(!voiceChannel){
			return message.channel.send("OOF! You're not in a channel.");
		}
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
		args = args.splice(1);
		message123 = true;
	}
	setTimeout(function(){
		if(message123 == true){
			if(cmd.toLowerCase() === 'oof'){
			voiceChannel.join().then(connection =>{
				console.log('Started playing');
				const dispatcher = connection.playFile('./oof.mp3');
				console.log('Done playing');
				dispatcher.on('end',()=> connection.disconnect());
			}).catch(err => console.log(err));}else if(cmd.toLowerCase() === 'deluxeoof'){
				voiceChannel.join().then(connection =>{
				console.log('Started playing');
				const dispatcher = connection.playFile('./deluxeoof.mp3');
				console.log('Done playing');
				dispatcher.on('end',()=> connection.disconnect());
			}).catch(err => console.log(err));}
			}
		},
		1000);
	
});


