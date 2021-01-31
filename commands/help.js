module.exports = {
  name: "help",
  desc: "show all commands or info on a specific commamd",
  run: async (msg, args, bot) => {
    let cmd = bot.cmds.get(args[1]);
    msg.reply(`**${cmd.name}**: ${cmd.desc}`);
  }
}
