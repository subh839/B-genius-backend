import express from "express";

import {
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/course.js";

const router = express.Router();

router.get("/", getCourse);
router.post("/", createCourse);
router.patch("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;
