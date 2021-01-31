const { rules } = require("../util/rules.json");

module.exports = {
  name: "rules",
  desc: "shows you server rules or a specific rule",
  run: (msg, args, bot) => {
  	let rule = args[1]; // rule number
    // if there's a rule number provided
    if (rule) msg.reply(rules[rule - 1]);
    // just show the rules
    else msg.reply(rules.join("\n\n"));
  }
}
