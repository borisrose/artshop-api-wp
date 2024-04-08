const {
  getData,
  sendData,
  getSpecificData,
} = require("../data/remote_data_sources/RenderPgDateSource");

class RemoteProductsController {


  static async getOneProductById(request, reply, app) {
    return await getSpecificData(
      app,
      "products",
      request.body.fields,
      request.body.values
    );
  }
  static async getProducts(request, reply, app) {
    return await getData(app, "products", request.body.fields);
  }

  static async storeOneProduct(request, reply, app) {
    return await sendData(app, "products", request.body.fields, listOfValues);
  }
}

module.exports = RemoteProductsController;
