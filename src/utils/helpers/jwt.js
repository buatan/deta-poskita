// noinspection JSCheckFunctionSignatures

const jwt = require('jsonwebtoken');
const globalConfig = require('../../config/env');
const passport = require("passport");
const UsersService = require("../../users/users.service");
const { Strategy, ExtractJwt } = require('passport-jwt');
const {UnauthorizedException} = require("./http-error");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: globalConfig.jwtConfig.secret,
  issuer: globalConfig.jwtConfig.issuer,
  audience: globalConfig.jwtConfig.audience,
};

passport.use(new Strategy(options, async (payload, done) => {
  const usersService = new UsersService();
  const user = await usersService.getUser(payload.sub);
  if (!user) return done(new UnauthorizedException("User not found"));
  return done(null, user);
}));

const sign = (payload) => {
  return jwt.sign(payload, options.secretOrKey, {
    issuer: options.issuer,
    audience: options.audience,
    expiresIn: globalConfig.jwtConfig.expiresIn,
  });
}

module.exports = {
  sign,
}