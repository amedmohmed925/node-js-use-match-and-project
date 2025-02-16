const User = require("../models/User");

const getUsersAbove30 = async (req, res) => {
    try {
      const users = await User.aggregate([
        { $match: { age: { $gt: 30 } } }, 
        { $project: { name: 1, age: 1, _id: 0 } }
      ]);
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };
  

  const getUserByNameAndAge = async (req, res) => {
    try {
      const { name } = req.params;
      const users = await User.aggregate([
        { $match: { name, age: 30 } },
        { $project: { name: 1, age: 1, _id: 0 } }
      ]);
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };
  
module.exports = { getUsersAbove30, getUserByNameAndAge };
