const UsersRepository = require("./users.repository");
const security = require("../utils/helpers/security");
const {ConflictException, NotFoundException} = require("../utils/helpers/http-error");

class UsersService {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  sanitizeUser(user) {
    delete user.password;
    delete user.confirmationToken;
    delete user.resetPasswordToken;
  }

  async getUserByIdentifier(identifier, email) {
    const user = await this.usersRepository.getUserByIdentifier(identifier, email || identifier);
    return user;
  }

  async createUser(createUserDto) {
    const exist = await this.usersRepository.getUserByIdentifier(createUserDto.username, createUserDto.email);
    if (exist) throw new ConflictException("User already exists");
    createUserDto.password = await security.hash(createUserDto.password);
    createUserDto.confirmed = createUserDto.confirmed || false;
    createUserDto.blocked = createUserDto.blocked || false;
    createUserDto.confirmationToken = !createUserDto.confirmed ? await security.genToken() : null;
    createUserDto.resetPasswordToken = null;
    const user = await this.usersRepository.createUser(createUserDto);
    this.sanitizeUser(user);
    return user;
  }

  async getUser(id) {
    const user = await this.usersRepository.getUserById(id);
    if (!user) throw new NotFoundException("User not found");
    this.sanitizeUser(user);
    return user;
  }
}

module.exports = UsersService;