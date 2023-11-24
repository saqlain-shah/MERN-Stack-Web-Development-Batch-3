import User from "../Models/userModel.js";
import validator from 'validator'; 

export const updateUser = async (req, res, next) => {
  try {

   if (req.body.email && !validator.isEmail(req.body.email)) {
     return res.status(400).json({ error: 'Invalid email format' });
    }
    if (req.body.username && /[A-Z]/.test(req.body.username)) {
      return res.status(400).json({ error: 'Invalid  format use lowercase like{abc}' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};