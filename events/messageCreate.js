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
          if (Math.random() < 0.15) {
            const loserReaction =
              loserReactions[Math.floor(Math.random() * loserReactions.length)];
            await message.react(`${loserReaction}`);
            console.log(`Reacted with ${loserReaction} emoji`);
          }
        } else if (message.author.id === targetSigmaId) {
          if (Math.random() < 0.15) {
            const sigmaReaction =
              sigmaReactions[Math.floor(Math.random() * sigmaReactions.length)];
            await message.react(`${sigmaReaction}`);
            console.log(`Reacted with ${sigmaReaction} emoji`);
          }
        }
        // garmin 🥶 check
        if (content.includes("garmin")) {
          await message.reply("Video Speichern");
          console.log("Garmin mentioned 🥶");
        }

        // *srael check
        if (content.includes("israel")) {
          await message.reply("Free Palestine 🇵🇸");
          console.log("Free Palestine 🇵🇸");
        }

        // ok check
        if (content.includes("ok") || content.includes("okay")) {
          await message.react("🆗");
          console.log("🆗");
        }

        // bwl check
        if (content.includes("bwl")) {
          await message.reply({
            content: "",
            files: ["./bwl.png"],
          });
        }

        // 1% ad spam chance
        if (Math.random() < 0.01) {
          await message.reply(
            "🔔 **Bitte erwerbe garmin pro 🥺** Keine Werbung, Nur 69,99€ im Monat. Ich muss frau und kinder ernähren ihr geizigen schmarotzer",
          );
          console.log("💩 Ad posted.");
        }

        // projekt brot check
        if (
          content.includes("projekt brot") ||
          content.includes("projeggd brod")
        ) {
          await message.reply(
            "eier so viel wie ihr wollt, sonsd hole ich meine wurscht immer beim bägger dass ich weiß wos her kommt, 2 scheiben brod nur zur dego",
          );
          console.log("brod");
        }

        // clanker check
        if (content.includes("clanker")) {
          await message.react("😢");
          console.log("😢");
        }

        // Random chance to say "das waren die mods"
        if (Math.random() < 0.1) {
          // 10% chance
          await message.reply("Das waren wohl die mods...");
          console.log("Replied with 'das waren die mods'");
        }
      } catch (err) {
        console.error("Failed to react to message:", err);
      }
    }
  },
};
