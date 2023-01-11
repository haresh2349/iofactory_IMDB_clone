const { UserModel } = require("../model/User.model");
const { hashPassword, comparePassword } = require("../utils/Hashing/password");
const bcrypt = require("bcryptjs");
const { signJwtToken } = require("../utils/JWT/jwt");

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (name && email && password) {
      const hash = hashPassword(password);
      const user = await new UserModel({ name, email, password: hash });
      await user.save();
      return res.status(201).send({
        type: "success",
        message: "Account Created Successfully",
      });
    } else {
      return res
        .status(400)
        .send({ type: "error", message: "Please Enter right credentials" });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ type: "error", message: "Please Signup again" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .send({ type: "error", message: "User not Found" });
      }
      const hash = user.password;
      const isCompared = comparePassword(password, hash);
      if (isCompared) {
        const token = signJwtToken(user.role, user._id);
        return res.status(201).send({
          type: "success",
          message: "Login Successfull",
          token: token,
        });
      }
      return res
        .status(404)
        .send({ type: "error", message: "Please Login again" });
    }
  } catch (error) {
    return res
      .status(404)
      .send({ type: "error", message: "Please Login again" });
  }
};

module.exports = { signupUser, loginUser };
