const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("iq")
    .setDescription("Replies with the given user's IQ!")
    .addUserOption((option) =>
      option
        .setName("of")
        .setDescription("User to analyze IQ of")
        .setRequired(true),
    ),
  async execute(interaction) {
    const targetUser = interaction.options.getUser("of");
    const iq = Math.floor(Math.random() * 146);

    await interaction.reply(`<@${targetUser.id}> has an IQ of ${iq}`);
  },
};
