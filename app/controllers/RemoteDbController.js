const { getData, sendData, createTable } = require("../data/remote_data_sources/RenderPgDateSource");

class RemoteDbController {
  static async createDbTable(request, reply, app) {
    return await createTable(app, request.body.table, request.body.fields)
  }


}

module.exports = RemoteDbController;
