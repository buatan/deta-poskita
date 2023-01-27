const UsersRepository = require("./users.repository");

class UsersService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async getUserByIdentifier(identifier) {
    return this.usersRepository.getUserByIdentifier(identifier);
  }
}

module.exports = UsersService;