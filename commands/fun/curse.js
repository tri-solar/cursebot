const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('curse')
		.setDescription('Replies with a Curse!'),
	async execute(interaction) {
		await interaction.reply('Sybau 💀');
	},
};
