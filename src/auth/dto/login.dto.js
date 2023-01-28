const Joi = require('joi');
const {username, email, password} = require('../../users/dto/create-user.dto');

const LoginDto = Joi.object({
  // identifier can be username or email
  identifier: Joi.alternatives().try(username, email).required(),
  // joi validation for password min length 8 characters, min 1 uppercase, min 1 lowercase, min 1 number
  password,
});

module.exports = {
  LoginDto,
}