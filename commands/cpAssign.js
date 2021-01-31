const config = require("../config.json");
const modCheck = require("../util/modCheck");

module.exports = {
  name: "assigncp",
  desc: "assign the cp role to some user",
  run: async (msg, args, bot) => {
    // check if the user is a moderator
    if (!modCheck(msg.member)) return;

    let user = msg.mentions.members.first();
    // assign the role
    await user.roles.cache.add(config.roles.cp)
          .catch((e) => msg.reply(e));
    // add nickname prefix
    user.setNickname(`${config.prefixes.cp} ${user.displayName}`);
  }
}
