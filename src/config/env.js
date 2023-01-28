const Joi = require("joi");

function getEnv(key, defaultValue) {
  return process.env[key] || defaultValue
}

const configs = {
  port: getEnv('PORT'),
  nodeEnv: getEnv('NODE_ENV'),
  detaKey: getEnv('DETA_KEY'),
  mysqlConfig: {
    host: getEnv('DATABASE_HOST'),
    port: getEnv('DATABASE_PORT'),
    database: getEnv('DATABASE_NAME'),
    username: getEnv('DATABASE_USER'),
    password: getEnv('DATABASE_PASS'),
    ssl: {
      ca: getEnv('DATABASE_SSL_CA'),
    },
  },
  jwtConfig: {
    audience: getEnv('JWT_AUDIENCE'),
    expiresIn: getEnv('JWT_EXPIRES_IN'),
    issuer: getEnv('JWT_ISSUER'),
    secret: getEnv('JWT_SECRET'),
  },
  smtpConfig: {
    host: getEnv('SMTP_HOST'),
    port: getEnv('SMTP_PORT'),
    auth: {
      user: getEnv('SMTP_USER'),
      pass: getEnv('SMTP_PASS'),
    },
  },
}

const configsResult = Joi.object({
  port: Joi.number().required(),
  nodeEnv: Joi.string().valid('development', 'test', 'production').required(),
  detaKey: Joi.string().required(),
  mysqlConfig: Joi.object({
    host: Joi.string().optional(),
    port: Joi.number().optional(),
    database: Joi.string().when('host', {is: Joi.exist(), then: Joi.required(), otherwise: Joi.optional()}),
    username: Joi.string().when('host', {is: Joi.exist(), then: Joi.required(), otherwise: Joi.optional()}),
    password: Joi.string().when('host', {is: Joi.exist(), then: Joi.required(), otherwise: Joi.optional()}),
    ssl: Joi.object().optional(),
  }).optional(),
  jwtConfig: Joi.object({
    audience: Joi.string().optional(),
    expiresIn: Joi.string().optional().default('1d'),
    issuer: Joi.string().optional(),
    secret: Joi.string().required(),
  }).required(),
  smtpConfig: Joi.object({
    host: Joi.string().required(),
    port: Joi.number().optional().default(587),
    auth: Joi.object({
      user: Joi.string().required(),
      pass: Joi.string().required(),
    }).required(),
  }).required(),
}).validate(configs);

if (configsResult.error) throw new Error(`Config validation error: ${configsResult.error.message}`);

module.exports = configsResult.value