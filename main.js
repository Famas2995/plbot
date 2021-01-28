const { Client } = require("discord.js");
const bot = new Client();
const config = require("./config.json");

// im testing shit out so dont mind the bad code

bot.once("ready", () => {
  console.log("logged in");
  bot.user.setActivity("PAHC's Lounge | p!", { type: "LISTENING" });
});

bot.on("message", (msg) => {
  // ignore bots and normal messages
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

  // split the message into arguments aka keywords
  let args = msg.content.slice(config.prefix.length).split(" ");
  let cmd = args[0].toLowerCase();

  msg.reply("im working so far");
});

bot.login(process.env.TOKEN);
