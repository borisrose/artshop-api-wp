const TestController = require('../controllers/TestController')
async function routes (fastify, options) {
    fastify.get('/test', (request, reply) => TestController.getTestData(request, reply, fastify))
}

module.exports = routes