const os = require("os");

module.exports = {
  name: "info",
  desc: "show a lot of information about the bot",
  run: async (msg, args, bot) => {
    let mem = Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100 / 100);

    // just so the line isnt ridiculously long
    let str = `ram used: ${mem}mb\n`
      + `node version: ${process.version}\n`
      + `uptime: ${Nath.floor(process.uptime())}\n\n`
      + `the bot is open source! https://github.com/b1tt0/plbot`
  }
}
