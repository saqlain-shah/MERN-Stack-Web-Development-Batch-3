import User from "../Models/userModel.js";
import { createError } from "../Utils/Error.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const Login = async (req, res, next) => {
  try {

    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY
    );

  const { password, isAdmin, ...otherDetails } = user._doc;
   console.log("Cookie", token);
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
        .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
