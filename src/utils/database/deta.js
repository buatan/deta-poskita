const { Deta } = require('deta')

const db = Deta(process.env.DETA_KEY)

module.exports = {
  db,
}