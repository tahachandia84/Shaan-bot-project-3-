module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "uzairrajput",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
				};
module.exports.run = ({event, api}) =>{
		const permission = [`61558005913380`,`61558005913380`];
	if (!permission.includes(event.senderID)) return api.sendMessage("⚠️You don't have permission to use this command. Only Hamza 💚✨", event.threadID, event.messageID);
	api.sendMessage(`[ OK ] BOT JANU${global.config.BOTNAME} Bot are now turned off.`,event.threadID, () =>process.exit(0))
}