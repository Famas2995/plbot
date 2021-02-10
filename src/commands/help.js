module.exports = {
  name: "help",
  desc: "show all commands or info on a specific commamd",
  run: async (msg, args, bot) => {
    let cmd = bot.cmds.get(args[1]);
    if (cmd) return msg.reply(`**${cmd.name}**: ${cmd.desc}`);
    // list all commands
    let full = "";
    bot.cmds.forEach((cmd) => full += `${cmd.name} `);

    msg.reply(full);
  }
}
