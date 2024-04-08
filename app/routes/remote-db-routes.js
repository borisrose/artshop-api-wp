const RemoteDbController = require("../controllers/RemoteDbController");

async function routes(fastify, options) {
  fastify.post("/remote-db/create-table", (request, reply) =>
    RemoteDbController.createDbTable(request, reply, fastify)
  );
}

module.exports = routes;
