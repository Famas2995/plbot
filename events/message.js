// discord.js events, emitted when a message is sent
const config = require("../config.json");

module.exports = async (msg, bot) => {
  let hasPrefix = false;
  if (msg.author.bot) return; // ignore bots
  // loop through all prefixes
  config.botPrefixes.forEach((p) => {
    hasPrefix = msg.content.startsWith(p);
    if (hasPrefix) return;
  });
  if (!hasPrefix) return;

  // split the message into arguments aka keywords
  let args = msg.content
                .slice(config.prefix.length)
                .trim()
                .split(" ");
  let cmd = args[0].toLowerCase();

  try {
    let toRun = bot.cmds.get(cmd);
    if (!toRun) {
      return msg.reply("command not found!");
    } else {
      await bot.cmds.get(cmd).run(
        msg, args, bot // what commands can use
      );
    }
  } catch (e) {
    msg.reply("error!\n```" + e + "```");
  }
}
