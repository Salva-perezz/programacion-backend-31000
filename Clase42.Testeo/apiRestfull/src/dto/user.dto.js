class UserDTO {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.id = user._id;
  }
}

export default UserDTO;
