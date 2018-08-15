const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);

  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");

  if (trimmedPath === "hello") {
    res.end("Welcome to Arthurs first small node app");
  } else {
    res.end("YOU ARE NOT WELCOME HERE!");
  }
});

server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
