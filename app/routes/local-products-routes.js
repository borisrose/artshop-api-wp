const LocalProductsController = require("../controllers/LocalProductsController.js");

async function routes(fastify, options) {
  fastify.get("/local-products", (request, reply) =>
    LocalProductsController.getProducts(request, reply, fastify)
  );
}

module.exports = routes;
