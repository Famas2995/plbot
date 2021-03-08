// discord.js events, emitted when a message is sent
const config = require("../config.json");

module.exports = async (msg, bot) => {
  if (msg.author.bot) return; // ignore bots
  // multiple prefixes
  let prefixRegex = new RegExp(
    `^(${config.botPrefixes.join('|')})`
  );
  let prefix = msg.content.match(prefixRegex);
  if (!prefix) return;

  // split the message into arguments aka keywords
  let args = msg.content
                .slice(prefix[0].length)
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
