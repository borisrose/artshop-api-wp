const {
    getData,
    sendData,
    getSpecificData,
  } = require("../data/remote_data_sources/RenderPgDateSource");
  
  class RemoteUsersController {
  
  
    static async getOneProductById(request, reply, app) {
      return await getSpecificData(
        app,
        "users",
        request.body.fields,
        request.body.values
      );
    }
    static async getUsers(request, reply, app) {
      return await getData(app, "users", request.body.fields);
    }
  
    static async storeOneUser(request, reply, app) {
      return await sendData(app, "users", request.body.fields, listOfValues);
    }
  }
  
  module.exports = RemoteUsersController;
  