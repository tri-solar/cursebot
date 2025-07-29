const { Events } = require('discord.js');
const { userId } = require('../config.json');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		if (message.author.id === userId && !message.author.bot) {
			try {
				await message.react('🤓');
			} catch (err) {
				console.error('Failed to react to message:', err);
			}
		}
	},
};
