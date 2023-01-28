const UsersService = require("../users/users.service");
const {NotFoundException, UnauthorizedException} = require("../utils/helpers/http-error");
const security = require("../utils/helpers/security");
const jwtHelper = require("../utils/helpers/jwt");
const {Data} = require("../utils/helpers/wrapper");

class AuthService {
  constructor() {
    this.usersService = new UsersService();
  }

  loginResponse(user) {
    return new Data({
      accessToken: jwtHelper.sign({sub: user.key}),
      user,
    })
  }

  async login(loginDto) {
    const user = await this.usersService.getUserByIdentifier(loginDto.identifier);
    if (!user || !(await security.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('Please check your login credentials');
    }
    this.usersService.sanitizeUser(user);
    return this.loginResponse(user);
  }

  async register(registerDto) {
    const user = await this.usersService.createUser(registerDto);
    return this.loginResponse(user);
  }
}

module.exports = AuthService;