const bcrypt = require('bcryptjs');

async function hash(text) {
  return bcrypt.hash(text, 10);
}

async function compare(text, encryptedText) {
  return bcrypt.compare(text, encryptedText);
}

async function genToken() {
  return encodeURIComponent(btoa(await bcrypt.genSalt(10)));
}

module.exports = {
  hash,
  compare,
  genToken,
}