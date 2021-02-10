import "os" as os;
import { Message } from "discord.js";

export {
  name: "info",
  desc: "show a lot of information about the bot",
  run: async (msg: Message, args: string[], bot): void => {
    let mem: number = Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100 / 100);

    // just so the line isnt ridiculously long
    let str: string = `ram used: ${mem}mb\n`
      + `node version: ${process.version}\n`
      + `uptime: ${Math.floor(process.uptime())} seconds\n\n`
      + `**the bot is open source!** https://github.com/b1tt0/plbot`;

    msg.reply(str);
  }
}
