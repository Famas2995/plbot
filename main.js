// events
const onReady   = require("./events/ready");
const onMessage = require("./events/message");

// dependencies
const { Client,Collection } = require("discord.js");
const bot = new Client({
  // cache n shit
  messageCacheMaxSize      : 10,
  messageCacheLifetime     : 5,
  messageSweepInterval     : 5,
  messageEditHistoryMaxSize: 1,

  disableMentions: "everyone",

  retryLimit: 3
});
bot.cmds = new Collection();
const config = require("./config.json");

// server stuff
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, {"content-type": "text/html"});
  fs.createReadStream("./public/index.html").pipe(res);
});

bot.once("ready", () => {
  onReady(bot);
  server.listen(process.env.PORT || 8080);
});

bot.on("message", async msg => onMessage(msg, bot));

bot.login(process.env.TOKEN);
