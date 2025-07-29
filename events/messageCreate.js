const { Events } = require("discord.js");
const { userId } = require("../config.json");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    console.log("messageCreate event fired"); // Add this line to confirm the event fires

    if (message.author.id === userId && !message.author.bot) {
      try {
        await message.react("🤓");
        console.log("Reacted with 🤓 emoji"); // Confirm reaction success
      } catch (err) {
        console.error("Failed to react to message:", err); // Log detailed error if react fails
      }
    }
  },
};
