const { owners } = require("../config.json");

module.exports = {
  name: "eval",
  desc: "evaluate code on the server (very sneaky)",
  run: async (msg, args, bot) => {
    let owner = false;
    owners.forEach((o) => {
      owner = (o == msg.author.id);
    });
    if (!owner) return!

    let code = args.join(" ");
    let evaled = eval(code);
    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
    msg.channel.send(clean(evaled));
  }
}
