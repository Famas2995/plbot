const { roles } = require("../config.json");

module.exports = (user) => {
  return user.roles.cache.has(roles.mod);
}
