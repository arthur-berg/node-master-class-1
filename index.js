const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);

  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");

  if (trimmedPath === "hello") {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({ message: "Welcome to Arthurs first small node app\n" })
    );
  } else {
    res.end();
  }
});

server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
