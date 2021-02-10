import { owners } from "../config.json";
import { Message } from "discord.js";

export {
  name: "eval",
  desc: "evaluate code on the server (very sneaky)",
  run: async (msg: Message, args: string[], bot): void => {
    let owner: boolean = false;
    owners.forEach(o: string => {
      owner = (o == msg.author.id);
      if (owner) return;
    });
    if (!owner) return;

    let code: string = args.join(" ");
    let evaled: any = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    msg.channel.send(evaled);
  }
}
