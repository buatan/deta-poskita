const Joi = require("joi");

// name must only contain letters and whitespaces
const name = Joi.string().pattern(/^[a-zA-Z ]*$/).required();

// username is alphanumeric and can't be empty and can't start with a number and minimum length is 6 characters
const username = Joi.string().alphanum().min(6).required();

// email must be a valid email and can't be empty
const email = Joi.string().email().required();

// password is strong password and special characters are optional and can't be empty
const password = Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/).required();

// phone number must be a valid indonesian phone number and is optional and only numbers are allowed
const phone = Joi.string().pattern(/^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/).optional();

// confirmed is boolean and is optional default is false
const confirmed = Joi.boolean().optional().default(false);

// blocked is boolean and is optional default is false
const blocked = Joi.boolean().optional().default(false);

const CreateUserDto = Joi.object({
  name,
  username,
  email,
  password,
  phone,
  confirmed,
  blocked,
});

module.exports = {
  name,
  username,
  email,
  password,
  phone,
  confirmed,
  blocked,
  CreateUserDto,
}