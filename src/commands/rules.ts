import { rules } from "../util/rules.json";
import { Message } from "discord.js";

module.exports = {
  name: "rules",
  desc: "shows you server rules or a specific rule",
  run: async (msg: Message, args: string[], bot): void => {
  	let rule: string = args[1]; // rule number
    // if there's a rule number provided
    if (rule) msg.reply(rules[rule - 1]);
    // just show the rules
    else msg.reply(rules.join("\n\n"));
  }
}
