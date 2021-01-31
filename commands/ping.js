module.exports = {
  name: "ping",
  desc: "display a lot of information about the bot",
  run: (msg, args, bot) => {
    let mem = process.memoryUsage().heapUsed / 1024 / 1024;
    // very messy but idc lolll
    msg.reply(`${Date.now() - msg.createdTimestamp}ms\n\n**nerdy info**\nused ${Math.round(mem*100)/100}mb\nnodejs version:${process.version}`);
  }
}
