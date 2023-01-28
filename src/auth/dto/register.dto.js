const Joi = require("joi");
const {name, username, email, password, phone} = require('../../users/dto/create-user.dto');

const RegisterDto = Joi.object({
  name,
  username,
  email,
  password,
  phone,
});

module.exports = {
  RegisterDto,
};