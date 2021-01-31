const { roles } = require("../config.json");

module.exports = (user) => {
  return user.roles.has(roles.mod);
}
