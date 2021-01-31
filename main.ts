// dependencies
import * as Discord from "https://esm.sh/discord.js";
import { walkSync } from "https://deno.land/std@0.85.0/fs/mod.ts";

// my own types
import { Command } from "./types/index.d.ts"

// variables
const bot: any = new Discord.Client();
bot.cmds = new Discord.Collection();
const config: any = require("./config.json");

bot.once("ready", () => {
  console.log(walkSync(config.cmds));
  let files = walkSync(config.cmds).filter((file: string) => file.endsWith(".js"));
  for (let file of files) {
    let c: Command = require(`${config.cmds}/${file}`);
    bot.cmds.set(c.name, c)
  }

  bot.user.setActivity("PAHC's Lounge | p!", { type: "LISTENING" });
});

bot.on("message", (msg: any) => {
  // ignore bots and messages without a prefix
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

  // split the message into arguments aka keywords
  let args: string[] = msg.content.slice(config.prefix.length).trim().split(" ");
  let cmd: string = args[0].toLowerCase();

  try {
    let toRun: Command = bot.cmds.get(cmd);
    if (!toRun) {
      return msg.reply("command not found!");
    } else {
      bot.cmds.get(cmd).run(
        msg, args, bot // what commands can use
      );
    }
  } catch (e) {
    msg.reply("error!\n```" + e + "```");
  }
});

bot.login(process.env.TOKEN);
