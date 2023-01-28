const bcrypt = require('bcryptjs');

async function hash(text) {
  return bcrypt.hash(text, 10);
}

async function compare(text, encryptedText) {
  return bcrypt.compare(text, encryptedText);
}

async function genToken() {
  const btoa = (value) => Buffer.from(value).toString('base64');
  return encodeURIComponent(btoa(await bcrypt.genSalt(10)));
}

module.exports = {
  hash,
  compare,
  genToken,
}