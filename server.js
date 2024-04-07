const server = require('./app')({
    logger: {
      level: 'info',
      transport: {
        target: 'pino-pretty'
      }
    }
})


server.listen({ port: 3000 }, function (err, address) {
    if (err) {
      server.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
})