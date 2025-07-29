const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dihhsize")
    .setDescription("Replies with the given user's dihhsize!")
    .addUserOption((option) =>
      option
        .setName("of")
        .setDescription("User to analyze dihh of")
        .setRequired(true),
    ),
  async execute(interaction) {
    const targetUser = interaction.options.getUser("of");
    const size = (Math.random() * (32 - 0.5) + 0.5).toFixed(1);

    await interaction.reply(`<@${targetUser.id}> has a ${size}cm dihh`);
  },
};
