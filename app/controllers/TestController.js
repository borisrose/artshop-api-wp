const ChildService = require('../services/ChildService')

class TestController {

    static async getTestData(request, reply){

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