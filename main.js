// events
const onReady = require("./events/ready");
const onMessage = require("./events/message")

// dependencies
const { Client,Collection } = require("discord.js");
const bot = new Client();
bot.cmds = new Collection();
const config = require("./config.json");

bot.once("ready", () => onReady(bot));
bot.on("message", async (msg) => onMessage(msg, bot));

bot.login(process.env.TOKEN);
