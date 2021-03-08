const config = require("./config.json");
const http = require("http");
const serve = require("serve-static")("./public");

const server = http.createServer((req, res) => {
  serve(req, res);
  console.log(req);
});

server.listen(process.env.PORT || config.port);
