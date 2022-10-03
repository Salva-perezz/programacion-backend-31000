const BaseRepository = require("./BaseRepository.js");

class UserRepository extends BaseRepository {
  constructor(User) {
    super(User);
  }

  async login(username, password) {}
}
