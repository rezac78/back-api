const Survey = require("../models/Survey");
const surveySchemaValidation = require("../validations/surveyValidation");

exports.createSurvey = async (req, res) => {
  try {
    await surveySchemaValidation.validate(req.body, { abortEarly: false });
    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json({
      status: true,
      message: "نظرسنجی با موفقیت ایجاد شد",
      data: survey,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "خطا در ایجاد نظرسنجی",
      errors: error.errors,
    });
  }
};

exports.getSurvey = async (req, res) => {
  try {
    const surveys = await Survey.find().populate("folder", "_id");
    res.status(200).json({ status: true, data: surveys });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "خطا در بازیابی نظرسنجی‌ها",
      error: error.message,
    });
  }
};

exports.getSurveyById = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id).populate(
      "folder",
      "_id"
    );
    if (!survey) {
      return res
        .status(404)
        .json({ status: false, message: "نظرسنجی یافت نشد" });
    }
    res.status(200).json({ status: true, data: survey });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "خطا در بازیابی نظرسنجی",
      error: error.message,
    });
  }
};

exports.updateSurvey = async (req, res) => {
  try {
    await surveySchemaValidation.validate(req.body, { abortEarly: false });
    const survey = await Survey.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!survey) {
      return res
        .status(404)
        .json({ status: false, message: "نظرسنجی برای به‌روزرسانی یافت نشد" });
    }
    res.status(200).json({
      status: true,
      message: "نظرسنجی با موفقیت به‌روزرسانی شد",
      data: survey,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "خطا در به‌روزرسانی نظرسنجی",
      errors: error.errors,
    });
  }
};

exports.deleteSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndDelete(req.params.id);
    if (!survey) {
      return res
        .status(404)
        .json({ status: false, message: "نظرسنجی برای حذف یافت نشد" });
    }
    res.status(200).json({ status: true, message: "نظرسنجی با موفقیت حذف شد" });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "خطا در حذف نظرسنجی",
      error: error.message,
    });
  }
};
