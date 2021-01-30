module.exports = {
  name: "help",
  desc: "show all commands or info on a specific commamd",
  run: (msg, args, bot) => {
    let cmd: string = bot.cmds.get(args[1]);
    msg.reply(`**${cmd.name}**: ${cmd.desc}`);
  }
}
