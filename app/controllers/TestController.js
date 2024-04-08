const listeningServer = require('../../server')
const ChildService = require('../services/ChildService')




class TestController {

    static async getTestData(request, reply, app){

        app.io.of("/").emit("message", "yo")

        ChildService.exec({
            event: "Test",
            data: {
                message: '🎉 Congratulations'
            }
        }, "test-process.js")


        return "Test Data"
    }
}

module.exports = TestController