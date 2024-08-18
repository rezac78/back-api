const Folder = require("../models/Folders");
const folderSchemaValidation = require("../validations/folderValidation");

exports.createFolder = async (req, res) => {
  try {
    await folderSchemaValidation.validate(req.body, { abortEarly: false });
    const folder = new Folder(req.body);
    await folder.save();
    res
      .status(201)
      .json({ status: true, message: "پوشه با موفقیت ایجاد شد", data: folder });
  } catch (error) {
    res
      .status(400)
      .json({
        status: false,
        message: "خطا در ایجاد پوشه",
        errors: error.errors,
      });
  }
};

exports.getFolders = async (req, res) => {
  try {
    const folders = await Folder.find();
    res.status(200).json({ status: true, data: folders });
  } catch (error) {
    res
      .status(500)
      .json({
        status: false,
        message: "خطا در بازیابی پوشه‌ها",
        error: error.message,
      });
  }
};

exports.getFolderById = async (req, res) => {
  try {
    const folder = await Folder.findById(req.params.id);
    if (!folder) {
      return res.status(404).json({ status: false, message: "پوشه یافت نشد" });
    }
    res.status(200).json({ status: true, data: folder });
  } catch (error) {
    res
      .status(500)
      .json({
        status: false,
        message: "خطا در بازیابی پوشه",
        error: error.message,
      });
  }
};

exports.updateFolder = async (req, res) => {
  try {
    await folderSchemaValidation.validate(req.body, { abortEarly: false });
    const folder = await Folder.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!folder) {
      return res
        .status(404)
        .json({ status: false, message: "پوشه برای به‌روزرسانی یافت نشد" });
    }
    res
      .status(200)
      .json({
        status: true,
        message: "پوشه با موفقیت به‌روزرسانی شد",
        data: folder,
      });
  } catch (error) {
    res
      .status(400)
      .json({
        status: false,
        message: "خطا در به‌روزرسانی پوشه",
        errors: error.errors,
      });
  }
};

exports.deleteFolder = async (req, res) => {
  try {
    const folder = await Folder.findByIdAndDelete(req.params.id);
    if (!folder) {
      return res
        .status(404)
        .json({ status: false, message: "پوشه برای حذف یافت نشد" });
    }
    res.status(200).json({ status: true, message: "پوشه با موفقیت حذف شد" });
  } catch (error) {
    res
      .status(500)
      .json({
        status: false,
        message: "خطا در حذف پوشه",
        error: error.message,
      });
  }
};
