import "node-fetch" as fetch;
import { decode } from "html-entities";
import { Message } from "discord.js";
const url: string = "https://opentdb.com/api.php?amount=1";

module.exports = {
  name: "trivia",
  desc: "spit a random question",
  run: async (msg: Message, args: string[], bot): void => {
    // fetch the data
    let res: Promise<fetch.Body> = await fetch(url);
    let data: Promise<Object> = await res.json();

    await msg.reply(decode(`${data.results[0].question} (answer: ||${data.results[0].correct_answer}||)`));
  }
}
