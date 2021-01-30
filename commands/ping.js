const os = require("os"); // for ram usage info

module.exports = {
  name: "ping",
  desc: "display a lot of information about the bot",
  run: (msg, args, bot) => {
    // very messy but idc lolll
    msg.reply(`${Date.now() - message.createdTimestamp}ms\n\n**nerdy info**\nfree mem: ${os.freemem()}\nuptime: ${process.uptime()}\nnodejs version:${process.version}`);
  }
}
