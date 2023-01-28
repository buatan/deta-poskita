const {db} = require("../utils/database/deta");

class UsersRepository {
  constructor() {
    this.usersRepository = db.Base("users");
  }

  buildUser(user) {
    user.id = user.key;
    delete user.key;
    return user
  }

  async getUserById(id) {
    const user = await this.usersRepository.get(id);
    return this.buildUser(user);
  }

  async getUserByIdentifier(identifier, email) {
    const [user] = await this.usersRepository.fetch([{email: email || identifier}, {username: identifier}]);
    return this.buildUser(user);
  }

  async createUser(user) {
    const result = await this.usersRepository.put(user);
    return this.buildUser(result);
  }

  async updateUser(id, user) {
    const updatedUser = await this.usersRepository.update(user, id);
    return this.buildUser(updatedUser);
  }

  async deleteUser(id) {
    await this.usersRepository.delete(id);
  }
}

module.exports = UsersRepository;