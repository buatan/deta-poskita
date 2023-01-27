const {db} = require("../utils/database/deta");

class UsersRepository {
  constructor() {
    this.usersRepository = db.Base("users");
  }

  async getUserById(id) {
    const user = await this.usersRepository.get(id);
    return user;
  }

  async getUserByIdentifier(identifier) {
    const [user] = await this.usersRepository.fetch([{email: identifier}, {username: identifier}]);
    return user;
  }

  async createUser(user) {
    const newUser = await this.usersRepository.put(user);
    return newUser;
  }

  async updateUser(id, user) {
    const updatedUser = await this.usersRepository.update(user, id);
    return updatedUser;
  }

  async deleteUser(id) {
    const deletedUser = await this.usersRepository.delete(id);
    return deletedUser;
  }
}

module.exports = UsersRepository;