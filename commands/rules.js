const { rules } = require("../util/rules.json");

module.exports = {
  name: "rules",
  desc: "shows you server rules or a specific rule",
  run: (msg, args) => {
    // if there's a rule number provided
    if (args[1]) msg.reply(rules[args[2]--]);
    // just show the rules
    else msg.reply(rules.join("\n\n"));
  }
}
