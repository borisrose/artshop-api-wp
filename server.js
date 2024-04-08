const server = require("./app")({
  logger: {
    level: 'error',
    transport: {
      target: "pino-pretty",
    },
  },
});

server.listen({ port: 3000 }, function (err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`)
});




