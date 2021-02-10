const fetch = require("node-fetch");
const { decode } = require("html-entities");
const url = "https://opentdb.com/api.php?amount=1";

module.exports = {
  name: "trivia",
  desc: "spit a random question",
  run: async (msg, args, bot) => {
    // fetch the data
    let res = await fetch(url);
    let data = await res.json();

    await msg.reply(decode(`${data.results[0].question} (answer: ||${data.results[0].correct_answer}||)`));
  }
}
