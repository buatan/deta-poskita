const { Deta } = require('deta')
const globalConfig = require('../../config/env');

const db = Deta(globalConfig.detaKey)

module.exports = {
  db,
}