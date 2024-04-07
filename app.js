const fastify = require('fastify')
const localProductsRoutes = require('./app/routes/local-products-routes')
const testRoutes = require('./app/routes/test-routes')
const cors = require('@fastify/cors');

function build(opts={}){
  const app = fastify(opts)
    
  app.register(require('@fastify/cors'), {
    hook: 'preHandler',
    delegator: (req, callback) => {
      const corsOptions = {
        // This is NOT recommended for production as it enables reflection exploits
        origin: true
      };

      // do not include CORS headers for requests from localhost
      if (/^localhost$/m.test(req.headers.origin)) {
        corsOptions.origin = false
      }

      // callback expects two parameters: error and options
      callback(null, corsOptions)
    },
  })
    
  app.addHook('onRequest', (req, res, next) => {
    console.log("Getting a Request")
    next()
  })
  app.register(localProductsRoutes)
  app.register(testRoutes)
  return app
}


module.exports = build

