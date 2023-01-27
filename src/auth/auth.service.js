const UsersService = require("../users/users.service");

class AuthService {
  constructor() {
    this.usersService = new UsersService();
  }

  async login(loginDto) {
    const user = await this.usersService.getUserByIdentifier(loginDto.identifier);
    if (!user) {
      throw new Error("User not found");
    }
    if (user.password !== loginDto.password) {
      throw new Error("Invalid password");
    }
    return user;
  }
}

module.exports = AuthService;