const { Events } = require("discord.js");
const { targetLoserId, targetSigmaId } = require("../config.json");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    console.log("messageCreate event fired");
    console.log("Author ID:", message.author.id);

    if (!message.author.bot) {
      try {
        if (message.author.id === targetLoserId) {
          await message.react("🤓");
          console.log("Reacted with 🤓 emoji");
        } else if (message.author.id === targetSigmaId) {
          await message.react("🔥");
          console.log("Reacted with 🔥 emoji");
        }
      } catch (err) {
        console.error("Failed to react to message:", err);
      }
    }
  },
};
