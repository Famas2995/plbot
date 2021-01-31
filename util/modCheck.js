const { roles } = require("../config.json");

module.exports = (msg) => {
  return msg.member.roles.has(roles.mod);
}
