const dataAccessLayers = require("./../data_access_layers/data-access-layers");
async function createDatabaseOrTable(query) {
  const response = await dataAccessLayers.sendQueryMysqlWithNodeJs(query);
  const data = response.data;
  return data;
}

module.exports = { createDatabaseOrTable };
