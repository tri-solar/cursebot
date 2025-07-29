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
      "bro denkt er ist lustig 😭",
      "Hdvs 😡",
      "Okay Garmin Video Speichern 📹",
      "Halt die Fresse ❤️‍🩹",
      "so schön und schlau wie der drache 😁",
      "Shut up 🤐",
      "beende es endlich 😉",
      "Sybau 💔",
      "dumm wie Brot 🍞",
      "was laberst du ❓",
      "Sei leise 🙏",
      "bro denkt er ist lustig 😭",
      "so schön und schlau wie der drache 😁",
    ];

    const curse = curses[Math.floor(Math.random() * curses.length)];

    await interaction.reply(`${curse} <@${targetUser.id}>`);
  },
};
