import mongoose from "mongoose";
import CourseDetails from "../models/ShopDetails.js";

export const getCourse = async (req, res) => {
  try {
    const courseDetails = await CourseDetails.find();
    res.status(200).json(courseDetails);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createCourse = async (req, res) => {
  const shop = req.body;

  const newShop = new CourseDetails(shop);
  try {
    await newShop.save();

    res.status(201).json(newShop);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateCourse = async (req, res) => {
  const { id: id } = req.params;
  const shop = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No Customer with that id");
  }

  const updatedCourse = await CourseDetails.findByIdAndUpdate(
    id,
    { ...shop, id }
  );
  res.json(updatedCourse);
};

export const deleteCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No shop with that id");
  }

  await CourseDetails.findByIdAndRemove(id);

  res.json({ message: "Shop deleted successfully" });
};
