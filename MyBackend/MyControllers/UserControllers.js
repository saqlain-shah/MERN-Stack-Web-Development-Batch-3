import User from "../MyModels/UserModels.js";
import { CreateError } from "../Utilities/Errors.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult, check } from "express-validator";

export const register = async (req, res, next) => {
  try {
    if (req.body.password.length < 8 ) {
        return res.status(400).json({ error: "Password must atleast 8 character, use symbols and alphanumeric letter:p"})
      }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,

    });
    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return next(CreateError(404, "Username does't match or not exist"));

    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isCorrectPassword)
      return next(CreateError(400, "Passwrod wrong please try again"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY
    );
    const { passowrd, isAdmin, ...otherDetails } = user._doc;
    console.log("Token", token);

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (error) {
    next(error);
  }
};

//UPDATE CONTROLLLER
export const UserUpdate = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedUser) {
      res.status(500).json("User not updated");
    }
    res.status(200).json({ upadatedData: updatedUser });
  } catch (error) {
    next(error);
  }
};

//DELETE USER
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};

//GET USER

export const getUser = async (req, res, next) => {
  try {
    const Userget = await User.findById(req.params.id);
    res.status(200).json(Userget);
    console.log(Userget);
  } catch (error) {
    next(error);
  }
};
//GET USERS

export const getUsers = async (req, res, next) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (error) {
    next(error);
  }
};
