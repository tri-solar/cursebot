const { Events } = require("discord.js");
const { targetLoserId, targetSigmaId } = require("../config.json");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    console.log("messageCreate event fired");
    console.log("Author ID:", message.author.id);

    const loserReactions = ["🤓", "💀", "😂", "👴🏻"];

    const sigmaReactions = ["🔥", "🐐", "🗣️", "🗿"];

    if (!message.author.bot) {
      const content = message.content.toLowerCase();
      try {
        if (message.author.id === targetLoserId) {
          const loserReaction =
            loserReactions[Math.floor(Math.random() * loserReactions.length)];
          await message.react(`${loserReaction}`);
          console.log(`Reacted with ${loserReaction} emoji`);
        } else if (message.author.id === targetSigmaId) {
          await message.react(`${sigmaReaction}`);
          console.log(`Reacted with ${sigmaReaction} emoji`);
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
