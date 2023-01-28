const {LoginDto} = require("./dto/login.dto");
const AuthService = require("./auth.service");
const {InternalServerErrorException} = require("../utils/helpers/http-error");
const {isValidPayload} = require("../utils/helpers/validator");
const {RegisterDto} = require("./dto/register.dto");
const globalConfig = require("../config/env");

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async login(req, res) {
    try {
      const loginDto = isValidPayload(req.body, LoginDto);
      const result = await this.authService.login(loginDto);
      res.status(200).json(result.getResponse());
    } catch (e) {
      if (globalConfig.nodeEnv === 'development') console.log(e);
      if (e.getCode) return res.status(e.getCode()).json(e.getResponse());
      const err = new InternalServerErrorException("Internal server error");
      res.status(err.getCode()).json(err.getResponse());
    }
  }

  async register(req, res) {
    try {
      const registerDto = isValidPayload(req.body, RegisterDto)
      const result = await this.authService.register(registerDto);
      res.status(200).json(result.getResponse());
    } catch (e) {
      if (globalConfig.nodeEnv === 'development') console.log(e);
      if (e.getCode) return res.status(e.getCode()).json(e.getResponse());
      const err = new InternalServerErrorException("Internal server error");
      res.status(err.getCode()).json(err.getResponse());
    }
  }
}

module.exports = AuthController;