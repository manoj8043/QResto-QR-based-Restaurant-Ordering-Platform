import express from "express";
import User from "../../models/User.js";

export const getAllUsers = async (_, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
    console.log("Users fetched successfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
    console.error("Error fetching users:", error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
};

export const setUser = async (req, res) => {
  try {
    const { username, email, userId, password, profilePic } = req.body;
    const user = new User({ username, email, userId, password, profilePic });
    const savedUser = await user.save();
    res.json(savedUser).status(201);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating user", error: error.message });
  }
};
