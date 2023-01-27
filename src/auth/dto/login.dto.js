const Joi = require('joi');

function LoginDto(payload) {
  const schema = Joi.object({
    // joi validation for identifier min length 6 characters, it can be email or username
    identifier: Joi.string().min(6).required(),
    // joi validation for password min length 8 characters, min 1 uppercase, min 1 lowercase, min 1 number
    password: Joi.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required(),
  });

  return schema.validate(payload);
}

module.exports = {
  LoginDto,
}