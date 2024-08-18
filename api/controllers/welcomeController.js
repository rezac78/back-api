const Welcome = require("../models/Welcome");
const welcomeSchemaValidation = require("../validations/welcomeValidation");

exports.createWelcome = async (req, res) => {
  try {
    await welcomeSchemaValidation.validate(req.body, { abortEarly: false });
    const welcome = new Welcome(req.body);
    await welcome.save();
    res.status(201).json({
      status: true,
      message: "بخش خوشامدگویی با موفقیت ایجاد شد",
      data: welcome,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "خطا در ایجاد بخش خوشامدگویی",
      errors: error.errors,
    });
  }
};

exports.getWelcomes = async (req, res) => {
  try {
    const welcomes = await Welcome.find().populate("survey", "_id");
    res.status(200).json({ status: true, data: welcomes });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "خطا در بازیابی بخش‌های خوشامدگویی",
      error: error.message,
    });
  }
};

exports.getWelcomeById = async (req, res) => {
  try {
    const welcome = await Welcome.findById(req.params.id).populate(
      "survey",
      "_id"
    );
    if (!welcome) {
      return res
        .status(404)
        .json({ status: false, message: "بخش خوشامدگویی یافت نشد" });
    }
    res.status(200).json({ status: true, data: welcome });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "خطا در بازیابی بخش خوشامدگویی",
      error: error.message,
    });
  }
};

exports.updateWelcome = async (req, res) => {
  try {
    await welcomeSchemaValidation.validate(req.body, { abortEarly: false });
    const welcome = await Welcome.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!welcome) {
      return res.status(404).json({
        status: false,
        message: "بخش خوشامدگویی برای به‌روزرسانی یافت نشد",
      });
    }
    res.status(200).json({
      status: true,
      message: "بخش خوشامدگویی با موفقیت به‌روزرسانی شد",
      data: welcome,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "خطا در به‌روزرسانی بخش خوشامدگویی",
      errors: error.errors,
    });
  }
};

exports.deleteWelcome = async (req, res) => {
  try {
    const welcome = await Welcome.findByIdAndDelete(req.params.id);
    if (!welcome) {
      return res
        .status(404)
        .json({ status: false, message: "بخش خوشامدگویی برای حذف یافت نشد" });
    }
    res
      .status(200)
      .json({ status: true, message: "بخش خوشامدگویی با موفقیت حذف شد" });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "خطا در حذف بخش خوشامدگویی",
      error: error.message,
    });
  }
};
