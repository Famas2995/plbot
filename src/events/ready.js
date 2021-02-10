// discord.js event, emits when the bot has logged in
const { readdirSync } = require("fs");
const config = require("../config.json");

module.exports = (bot) => {
  // get all files with js code
  let files = readdirSync(`./${config.cmds}`).filter(file => file.endsWith(".js"));
  for (let file of files) {
    // require them and add to commands
    let c = require(`../${config.cmds}/${file}`);
    bot.cmds.set(c.name, c);
  }

  // fancy status
  bot.user.setActivity("PAHC's Lounge | p!help", { type: "LISTENING" });
}
