const {ConflictException} = require("./http-error");

function isValidPayload(payload, schema) {
  const {value, error} = schema.validate(payload);
  if (error) throw new ConflictException(error.message);
  return value
}

module.exports = {
  isValidPayload,
};