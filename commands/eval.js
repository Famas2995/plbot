const { owners } = require("../config.json");

module.exports = {
  name: "eval",
  desc: "evaluate code on the server (very sneaky)",
  run: (msg, args, bot) => {
    // check if its sent by a bot owner
    let allowed = false;
    owners.forEach((owner) => {
      if (msg.author.id == owner) allowed = true;
    });
    if (!allowed) return;

    let code = args.shift(1).join(" ");
    msg.reply(eval(code));
  }
}
