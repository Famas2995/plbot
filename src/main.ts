// events
import "./events/ready" as onReady;
import "./events/message" as onMessage;

// config
import "./config.json" as config;

// dependencies
import "discord.js" as Discord;
const bot: Discord.Client = new Discord.Client({
  // cache n shit
  messageCacheMaxSize      : 10,
  messageCacheLifetime     : 5,
  messageSweepInterval     : 5,
  messageEditHistoryMaxSize: 1,

  disableMentions: "everyone",

  retryLimit: 3
});

bot.cmds = new Discord.Collection();

// listen to events
bot.once("ready", () => onReady(bot));
bot.on("message", async msg: Discord.Message => onMessage(msg, bot));

bot.login(process.env.TOKEN);
