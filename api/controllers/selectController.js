const Course = require("../models/Course");
const mongoose = require("mongoose");
const User = require("../models/User");
// Create a new select
exports.createSelect = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({
      success: true,
      message: "Created successfully",
      data: course,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
// Get all select
// exports.getAllSelect = async (req, res) => {
//   try {
//     const courses = await Course.find();
//     const coursesWithPurchaseCount = await Promise.all(courses.map(async (course) => {
//       const purchaseCount = await User.countDocuments({ purchasedCourses: course._id });
//       return { ...course._doc, purchaseCount };
//   }));
//     res.status(200).json({ success: true, data: coursesWithPurchaseCount });
//   } catch (error) {
//     res.status(400).json({ success: false, error: error.message });
//   }
// };
// Update a select by ID
// exports.updateSelect = async (req, res) => {
//   try {
//     const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!course) {
//       return res
//         .status(404)
//         .json({ success: false, error: "No course found with this ID" });
//     }
//     res
//       .status(200)
//       .json({ success: true, message: "َUpdate successfully", data: course });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Something is wrong",
//       error: error.message,
//     });
//   }
// };
// Delete a select by ID
// exports.deleteSelect = async (req, res) => {
//   try {
//     const course = await Course.findByIdAndDelete(req.params.id);
//     if (!course) {
//       return res
//         .status(404)
//         .json({ success: false, message: "No course found with this ID" });
//     }
//     res.status(200).json({ success: true, message: "Deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ success: false, error: error.message });
//   }
// };
// Delete a select by ID
// exports.deleteSelect = async (req, res) => {
//   try {
//     const { courseId, chapterId } = req.params;
//     await Course.updateOne(
//       { _id: courseId },
//       { $pull: { chapters: { _id: chapterId } } }
//     );
//     res
//       .status(200)
//       .json({ success: true, message: "Chapter deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ success: false, error: error.message });
//   }
// };
// Get a select by ID
// exports.getSelectById = async (req, res) => {
//   try {
//     const courseId = req.params.id;
//     const course = await Course.findById(courseId);
//     if (!course) {
//       return res.status(404).json({ message: "Course not found" });
//     }
//     const purchaseCount = await User.countDocuments({
//       purchasedCourses: courseId,
//     });
//     let isPurchased = false;
//     if (req.user) {
//       const user = await User.findById(req.user._id);
//       if (user && user.purchasedCourses.includes(courseId)) {
//         isPurchased = true;
//       }
//     }
//     res
//       .status(200)
//       .json({
//         success: true,
//         data: { ...course._doc, isPurchased, purchaseCount },
//       });
//   } catch (error) {
//     console.error("Error fetching course:", error);
//     res.status(500).json({ message: "Error fetching course data" });
//   }
// };
