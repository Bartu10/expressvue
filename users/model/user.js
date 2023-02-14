const User = require('../model/user');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);

exports.getUsers = async (req, res) => {
  const users = await User.fetchAll();
  res.send(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
};

exports.postUser = async (req, res) => {
  const { name, email } = req.body;
  const user = new User(null, name, email);
  await user.save();
  res.status(201).send(user);
};

exports.putUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = new User(id, name, email);
  await user.save();
  res.send(user);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.deleteById(id);
  res.send();
};