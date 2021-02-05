// custom wrapper around redis
const redis = require("redis");
const redisURL = url.parse(process.env.REDISCLOUD_URL);

const client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
client.auth(redisURL.auth.split(":")[1]);

module.exports = {
  add: id => { // add an infraction
    let infractions = 0;

    client.get(id, (e, reply) => {
      if (ok == null) return console.log(`[redis] making entry ${id}`);
      else if (e) throw e;

      else infractions = reply;
    });

    client.set(id, infractions++);
  },

  exists: id => { // check if there are infractions
    let exists = 0;
    client.exists(id, (e, reply) => {
      if (err) throw err;
      exists = reply;
    });
  }
}
