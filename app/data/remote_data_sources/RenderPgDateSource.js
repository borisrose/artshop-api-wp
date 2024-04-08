class RenderPgDateSource {
  static async createTable(app, table, fields) {
    if (!table || !fields) {
      return "missing data";
    }
    return app.pg.transact(async (client) => {
      // will resolve to an id, or reject with an error
      await client.query(`CREATE TABLE IF NOT EXISTS ${table}(${fields})`);
    });
  }

  static async getSpecificData(app, table, fields, listOfValues) {
    if (!table || !fields || !listOfValues) {
      return "missing data";
    }
    const client = await app.pg.connect();
    try {
      const { rows } = await client.query(
        `SELECT ${fields} FROM ${table} WHERE id=$1`,
        listOfValues
      );
      return rows;
    } finally {
      client.release();
    }
  }

  static async getData(app, table, fields) {
    if (!table || !fields) {
      return "missing data";
    }
    const client = await app.pg.connect();
    try {
      const { rows } = await client.query(`SELECT ${fields} FROM ${table}`);
      return rows;
    } finally {
      client.release();
    }
  }

  static async sendData(app, table, fields, listOfValues, type) {
    if (!table || !fields || !listOfValues || !type) {
      return "missing data";
    }
    return app.pg.transact(async (client) => {
      // will resolve to an id, or reject with an error
      if (type == "insert") {
        const id = await client.query(
          `INSERT INTO ${table}(${fields}) VALUES(${listOfValues}) RETURNING id`,
          listOfValues
        );
        return id;
      }
    });
  }
}

module.exports = RenderPgDateSource;
