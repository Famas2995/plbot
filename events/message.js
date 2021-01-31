// discord.js events, emitted when a message is sent

module.exports = async (msg, bot) => {
  // ignore bots and messages without a prefix
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

  // split the message into arguments aka keywords
  let args = msg.content.slice(config.prefix.length).trim().split(" ");
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
