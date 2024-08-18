const yup = require("yup");

const welcomeSchemaValidation = yup.object().shape({
  title: yup.string().required("عنوان الزامی است"),
  description: yup.string().required("توضیحات الزامی است"),
  survey: yup
    .string()
    .required("آیدی نظرسنجی الزامی است")
    .matches(/^[0-9a-fA-F]{24}$/, "آیدی نظرسنجی معتبر نیست"),
});
module.exports = welcomeSchemaValidation;
