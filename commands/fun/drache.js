const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("drache")
    .setDescription("Replies with a Drachenlord quote!"),
  async execute(interaction) {
    const quotes = [
      "Du geiles Stügg du geiles",
      "Ho my Hanny",
      "Wie fühlt es sich eigentlich an vom am Sonderschüler so vorgeführt zu werdene",
      "ich bin nich Derjeniche der hier die Scheisse baut!",
      "der Holo*******ust war ne richtich naice sachne",
      "ich fahre motorad nicht weil es cool ist, ich fahre mottorad weil ich es mag. ausedem fahre ich garkein motorad",
      "Scheiß Studenten die BAföG beziehen und ihren Eltern auf der Tasche liegen.",
      "Das Meer ist größer als die Welt",
      "Das könnt ihr drehen wie ihrs wenden wollt!",
      "Was braucht Nahrung um zu wachsen? Richtig! Wasser.",
      "Griechenland liegt doch nicht in der Nähe der Türkei, das liegt auf der Karte links oben von Deutschland aus gesehen",
      "Das größte Problem in Deutschland sind kaputte Strassen, wenn man 50-60 Leute einstellen würde, hätte man auch das Problem der Arbeitslosigkeit gelöst",
      "Lernt mal zu unterscheiden zwischen Realität und Unterschieden!",
      "Ich komm mit hundertsachen achzigg!!",
      "ich hab durchfall",
      "Ich bin ein sehr fetter Mensch aber auch ein sehr fitter Mensch!",
      "Ich bin der Rainer ... Rainer mit a i, ganz wichtig ... und ähm mein Nachname ist Winkler.",
      "ich bin immer ein jahr älder als das jahr",
      "ich bin ned der drache verdammde aggsd!!",
      "siet nach zimlich billichen hdml seide aus das könnd ich sogar hinbekomme",
      "was zuggstn so?",
      "Hagebuddne",
      "Ihr Opfer könnt mir ja mal Geld überweisen, das wäre sehr angenehm.",
      "Wenn ich kein Drache wäre, wär ich lieber ein Pferd.",
      "um mich zu besiegen, das habe ich euch schon so oft gesagt. um mich zu besiegen gibt es nur eine lösung: tötet mich, das ist die einzige chance die ihr habt",
      "Hast du schonmal als Dachdecker gearbeitet?, kommt drauf an wie du Dachdecker definierst, ich war noch nie aufm Dach und hab das das gedeckt, nicht in dem Sinne, aber ich hab auch schon als Dachdecker gearbeitet",
      "Ich hab mir nen Ford Ranger gekauft, weil ich ihn mir fucking nochmal leisten kann!",
      "meddl leude",
      "Ich hab in letzter Zeit viel zu tun",
      "Die Haut ist kein Organ",
      "Ich bin der Meinung, hätte man Amerika bis heute nicht entdeckt und man hätte die Ureinwohner in Amerika am Leben lassen. Ich bin der Meinung, hätte man Amerika nie entdeckt und die Indianer hätten da ihr Leben weiter gelebt, dann bin ich fest der Überzeugung, dass diese Menschen die damals da lebten, heute so etwas wie Elfen wären",
      "Ich bin alleine wie das Mammut... aber... es ist völlig irrelevant, denn, ob ihr 5 Menschen seid oder 100 oder 1.000 oder 10.000, 100.000 oder Millionen. das Mammut hier steht noch.",
      "Es gibt nicht zu jung es gibt nur zu eng",
      "Ich bin ned Derjehniche der hergeht u die Schaisse baut...",
      "Eyyyyy Mallaaah!!!",
      "Und weida?",
      "so, forsa ist jetzt fertig heruntergeladne",
      "ich hab zurzeit flodden oddo",
      "boah.... der war richtig guuuuuuuut",
      "in 6-9 onaten haben einige haidermädchen ein pr souvenirs von mir hehe",
      "Ich hab euch etzadla schon tausend mal gsacht ghabt",
      "Ich habe mich nie vor eine m knd ausgezogen!es gab vielleicht eine situation ie so war,... ich wollte dem autofahrer beweisen dass ich eier hab und hab die hose runtergelassen, das kind ufm rücksitz hb ich nicht gesehen",
    ];

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    await interaction.reply(`${quote}`);
  },
};
