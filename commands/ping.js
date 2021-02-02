module.exports = {
  name: "ping",
  desc: "show the bot's response time",
  run: async (msg, args, bot) => {
    msg.reply(
      `${Date.now() - msg.createdTimestamp}ms`
    );
  }
}
