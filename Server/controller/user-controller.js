import User from "../model/user-schema.js";
//read
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//creat
export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//displaying particular id info
export const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.error({ message: error.message });
  }
};
//edit
export const edituser = async (req, res) => {
  const user = req.body;
  const edituser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, edituser);
    res.json(edituser);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//delete
export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.json("User Deleted Successfully!!!"); 
  } catch (error) {
    res.json({ message: error.message });
  }
};
