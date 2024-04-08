const RemoteUsersController = require("../controllers/RemoteUsersController.js");

async function routes(fastify, options) {
  fastify.post("/remote-users/:id", (request, reply) =>
    RemoteUsersController.getOneUserById(request, reply, fastify)
  );
  fastify.post("/remote-users/all", (request, reply) =>
    RemoteUsersController.getUsers(request, reply, fastify)
  );

  fastify.post("/remote-user/add", (request, reply) =>
    RemoteUsersController.storeOneUser(request, reply, fastify)
  );
  
}

module.exports = routes;
