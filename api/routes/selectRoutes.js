const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  getCourseById,
} = require("../controllers/selectController");

// Example routes for select
router.post("/", createCourse);
// router.get("/", getAllCourses);
// router.get("/:id", getCourseById);
// router.put("/:id", updateCourse);
// router.delete("/:id", deleteCourse);
module.exports = router;
