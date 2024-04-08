const RemoteProductsController = require("../controllers/RemoteProductsController.js");

async function routes(fastify, options) {
  fastify.post("/remote-products/:id", (request, reply) =>
    RemoteProductsController.getOneProductById(request, reply, fastify)
  );
  fastify.post("/remote-products/all", (request, reply) =>
    RemoteProductsController.getProducts(request, reply, fastify)
  );

  fastify.post("/remote-products/add", (request, reply) =>
    RemoteProductsController.storeOneProduct(request, reply, fastify)
  );
  
}

module.exports = routes;
