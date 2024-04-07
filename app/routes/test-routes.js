const TestController = require('../controllers/TestController')
async function routes (fastify, options) {
    fastify.get('/test', TestController.getTestData)
}

module.exports = routes