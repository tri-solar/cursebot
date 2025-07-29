const { Events } = require("discord.js");
const { targetLoserId, targetSigmaId } = require("../config.json");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    console.log("messageCreate event fired");
    console.log("Author ID:", message.author.id);

    if (!message.author.bot) {
      const content = message.content.toLowerCase();
      try {
        if (message.author.id === targetLoserId) {
          await message.react("🤓");
          console.log("Reacted with 🤓 emoji");
        } else if (message.author.id === targetSigmaId) {
          await message.react("🔥");
          console.log("Reacted with 🔥 emoji");
        }
        // garmin 🥶 check
        if (content.includes("garmin")) {
          await message.reply("Video Speichern");
          console.log("Garmin mentioned 🥶");
        }
      } catch (err) {
        console.error("Failed to react to message:", err);
      }
    }
  },
};
