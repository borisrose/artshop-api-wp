const fastify = require("fastify");
const localProductsRoutes = require("./app/routes/local-products-routes");
const testRoutes = require("./app/routes/test-routes");
const remoteProductsRoutes = require("./app/routes/remote-products-routes");
const remoteDbRoutes = require("./app/routes/remote-db-routes");
const remoteUsersRoutes = require("./app/routes/remote-users-routes");
const cors = require("@fastify/cors");
const onRequest = require("./app/hooks/onRequest");
require("dotenv").config();

function build(opts = {}) {
  const app = fastify(opts);

  // CORS REGISTERING
  app.register(require("@fastify/cors"), {
    hook: "preHandler",
    delegator: (req, callback) => {
      const corsOptions = {
        // This is NOT recommended for production as it enables reflection exploits
        origin: true,
      };

      // do not include CORS headers for requests from localhost
      if (/^localhost$/m.test(req.headers.origin)) {
        corsOptions.origin = false;
      }

      // callback expects two parameters: error and options
      callback(null, corsOptions);
    },
  });

  //
  app.addHook("onRequest", onRequest);

  //POSTGRE REGISTERING
  app.register(require("@fastify/postgres"), {
    connectionString: process.env.ONRENDER_ARTSHOP_WP_DB_URL,
    ssl:true
  });

  //SOCKET IO REGISTERING
  app.register(require("fastify-socket.io"), {
    // put your options here
    cors: {
      origin: "*",
      method: ["POST", "GET"],
    },
  });

  // ROUTES + APP => SOCKET IO
  app.register(localProductsRoutes);
  app.register(remoteProductsRoutes)
  app.register(remoteDbRoutes);
  app.register(remoteUsersRoutes);
  app.register(testRoutes);


  //SOCKET IO
  app.ready((err) => {
    if (err) throw err;

    app.io.on("connect", (socket) =>
      console.info("Socket connected!", socket.id)
    );
    app.io.on("connection", (socket) => {
      console.info("🔵 connection");
    });
    app.io.on("new_namespace", (namespace) => {
      console.log("new_namespace", namespace.name);
    });
  });

  return app;
}

module.exports = build;
