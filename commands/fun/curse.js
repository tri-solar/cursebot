const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("curse")
    .setDescription("Replies with a Curse!")
    .addUserOption((option) =>
      option.setName("to").setDescription("User to curse").setRequired(true),
    ),
  async execute(interaction) {
    const targetUser = interaction.options.getUser("to");

    const curses = [
      "Sybau 💔",
      "Syfm 💔",
      "Hdvs 😡",
      "Okay Garmin Video Speichern 📹",
      "Halt die Fresse ❤️‍🩹",
      "Shut up 🤐",
      "kys 🤡",
      "beende es endlich 😉",
    ];

    const curse = curses[Math.floor(Math.random() * curses.length)];

    await interaction.reply(`${curse} <@${targetUser.id}>`);
  },
};
