import "../config.json" as config;
import "../util/modCheck" as modCheck;
import { Message, User } from "discord.js";

module.exports = {
  name: "assigncp",
  desc: "assign the cp role to some user",
  run: async (msg: Message, args: string[], bot): void => {
    // check if the user is a moderator
    if (!modCheck(msg.member)) return;

    let user: User = msg.mentions.members.first();
    // assign the role
    await user.roles.add(config.roles.cp)
          .catch((e) => msg.reply(e));
    // add nickname prefix
    user.setNickname(`${config.prefixes.cp} ${user.displayName}`);
  }
}
