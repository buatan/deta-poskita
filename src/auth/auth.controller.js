const {LoginDto} = require("./dto/login.dto");
const AuthService = require("./auth.service");
const {InternalServerErrorException} = require("../utils/helpers/http-error");

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async login(req, res) {
    try {
      const loginDto = LoginDto(req.body);
      const result = await this.authService.login(loginDto);
      res.status(200).json(result);
    } catch (e) {
      if (e?.getCode()) return res.status(e.getCode()).json(e.getResponse());
      const err = new InternalServerErrorException("Internal server error");
      res.status(err.getCode()).json(err.getResponse());
    }
  }
}

module.exports = AuthController;