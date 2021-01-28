const { readdirSync } = require("fs");
const { Client,Collection } = require("discord.js");
const bot = new Client();
bot.cmds = new Collection();
const config = require("./config.json");

// im testing shit out so dont mind the bad code
bot.once("ready", () => {
  let files = readdirSync(config.cmds).filter(file => file.endsWith(".js"));
  for (let file of files) {
    let c = require(`${config.cmds}/${file}`);
    bot.cmds.set(c.name, c);
  }

  console.log(bot.cmds);
  bot.user.setActivity("PAHC's Lounge | p!", { type: "LISTENING" });
});

bot.on("message", (msg) => {
  // ignore bots and messages without a prefix
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

  // split the message into arguments aka keywords
  let args = msg.content.slice(config.prefix.length).split(" ");
  let cmd = args[0].toLowerCase();

  msg.reply(bot.cmds.get(cmd));
});

bot.login(process.env.TOKEN);
