const Selects = require("../models/Select");

exports.createSelect = async (req, res) => {
  try {
    const question = new Selects(req.body);
    await question.save();
    res.status(201).json({
      status: true,
      message: "مقدار با موفقیت ایجاد شد",
      data: question
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "خطا در ایجاد مقدار",
      error: error.message
    });
  }
};

exports.getSelect = async (req, res) => {
  try {
    const questions = await Selects.find();
    res.status(200).json({
      status: true,
      message: "مقادیر با موفقیت بازیابی شد",
      data: questions
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "خطا در بازیابی مقادیر",
      error: error.message
    });
  }
};

exports.getSelectById = async (req, res) => {
  try {
    const question = await Selects.findById(req.params.id);
    if (!question) {
      return res.status(404).json({
        status: false,
        message: "مقدار یافت نشد"
      });
    }
    res.status(200).json({
      status: true,
      message: "مقدار با موفقیت یافت شد",
      data: question
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "خطا در یافتن مقدار",
      error: error.message
    });
  }
};

exports.updateSelect = async (req, res) => {
  try {
    const question = await Selects.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!question) {
      return res.status(404).json({
        status: false,
        message: "مقدار برای به‌روزرسانی یافت نشد"
      });
    }
    res.status(200).json({
      status: true,
      message: "مقدار با موفقیت به‌روزرسانی شد",
      data: question
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "خطا در به‌روزرسانی مقدار",
      error: error.message
    });
  }
};

exports.deleteSelect = async (req, res) => {
  try {
    const question = await Selects.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).json({
        status: false,
        message: "مقدار برای حذف یافت نشد"
      });
    }
    res.status(200).json({
      status: true,
      message: "مقدار با موفقیت حذف شد"
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "خطا در حذف مقدار",
      error: error.message
    });
  }
};
