import Staff from "../models/Staff.js";

export const getAllStaff = async (_, res) => {
  try {
    const staff = await Staff.find();
    if (!staff || staff.length === 0) {
      return res.status(404).json({ message: "No staff found" });
    } else {
      console.log("Staff fetched successfully");
      res.status(200).json(staff);
    }
  } catch (error) {
    console.error("Error fetching staff:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getStafffById = async (req, res) => {
  const { id } = req.params;
  try {
    const staff = await staff.findById(id);
    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }
  } catch (error) {
    console.error("Error fetching staff by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const setStaff = async (req, res) => {
  try {
    const { staffName, staffemail, staffrole, staffbranch, staffId } = req.body;
    const staff = new Staff({
      staffName,
      staffemail,
      staffrole,
      staffbranch,
      staffId,
    });
    const savedStaff = await staff.save();
    res.status(201).json(savedStaff);
    console.log("Staff created successfully");
  } catch (error) {
    console.error("Error creating staff:", error);
    res
      .status(400)
      .json({ message: "Error creating staff", error: error.message });
  }
};
