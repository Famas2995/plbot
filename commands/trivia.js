const fetch = require("node-fetch");
const url = "https://opentdb.com/api.php?amount=1";

module.exports = {
  name: "trivia",
  desc: "spit a random question",
  run: async (msg, args, bot) => {
    // fetch the data
    let res = await fetch(url);
    let data = await res.json();

    await msg.reply(data.results[0].question);
  }
}
