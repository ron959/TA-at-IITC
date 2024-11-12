// Models Import
const User = require("../models/userModel.js");

const createUser = async (req, res) => {
  try {
    const { fName, lName, phoneNumber, email } = req.body;

    if (!fName || !lName || !phoneNumber || !email) {
      return res.status(400).send({
        status: "error",
        message: "One of the fields is missing",
      });
    }

    const newUser = new User({
      fName,
      lName,
      phoneNumber,
      email,
    });

    await newUser.save();

    res.send({
      status: "success",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    if (error?.errorResponse?.code === 11000) {
      return res.status(400).send({
        status: "Failed",
        message: "User Alerady Exists",
      });
    }

    res.status(500).send(error);
  }
};

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return res.status(404).send({
        status: "failed",
        data: "User Not Found",
      });
    }

    res.send({
      status: "success",
      data: foundUser,
    });
  } catch (error) {
    console.log(error);

    if (error.name === "CastError"){
        return res.status(400).send({
            status: "failed",
            data: "this is not a valide id at all",
        })
    }
    res.status(500).send(error);
  }
};

module.exports = {
  createUser,
  findUserById,
};
