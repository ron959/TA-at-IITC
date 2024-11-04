import express from "express";
import User from "../models/userModel.js";
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const allFetchedUsers = await User.find();

    res.status(200).send({
      status: "success",
      message: "Users Found",
      data: allFetchedUsers,
    });
  } catch (error) {
    res.status(500);
  }
});

router.post("/new-user", async (req, res) => {
  const { fName, lName, phoneNumber } = req.body;
  try {
    const newUser = new User({
      fName,
      lName,
      phoneNumber,
    });

    await newUser.save()

    res.status(201).send({
        status: 'success',
        message: 'User Succefully Regitered',
        data: newUser
    })
  } catch (error) {
    if (error.errorResponse.code === 11000) {
      res.status(400).send(error.errorResponse.errmsg)
    }
    res.status(500).send(error)
  }
});
export default router;
