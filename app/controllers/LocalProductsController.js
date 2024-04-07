const products = require("../data/products.json");
const JSON5 = require("json5");
const fs = require("node:fs");
const yaml = require("js-yaml");
const toml = require("toml");

class LocalProductsController {
  static async getProducts(request, reply) {
    const json5Content = fs.readFileSync("./app/data/products.json5", "utf8");
    const json5Products = await JSON5.parse(json5Content);
    const yamlContent = fs.readFileSync("./app/data/products.yaml", "utf8");
    const yamlProducts = yaml.load(yamlContent);
    const tomlContent = fs.readFileSync("./app/data/products.toml", "utf8");
    const tomlProducts = toml.parse(tomlContent);

    return [
      ...json5Products,
      ...products,
      ...yamlProducts.products,
      ...tomlProducts.products,
    ];
  }
}

module.exports = LocalProductsController;
