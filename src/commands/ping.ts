import { Message } from "discord.js";

export {
  name: "ping",
  desc: "show the bot's response time",
  run: async (msg: Message, args: string[], bot): void=> {
    msg.reply(`${Date.now() - msg.createdTimestamp}ms`);
  }
}
