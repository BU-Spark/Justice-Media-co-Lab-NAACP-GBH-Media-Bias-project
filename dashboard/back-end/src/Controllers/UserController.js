const { models } = require("../config/database");
const { sendJSONResponse, getCurrentTimeStamp } = require("../helpers");

const { User } = models;

class UserController {
  static async getUsers(req, res) {
    const users = [];
    const user = new User({
      email: "test@test.com",
      firstName: "test",
      lastName: "user",
      password: "test pass",
      lastLoginDate: getCurrentTimeStamp(),
      imageUrl: "",
      isEmailConfirmed: true,
    });
    users.push(user);

    return sendJSONResponse(
      res,
      200,
      { users },
      "users retrieved successfully"
    );
  }
}

module.exports = UserController;
