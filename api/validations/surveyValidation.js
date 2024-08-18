const yup = require('yup');

const surveySchemaValidation = yup.object().shape({
  folder: yup.string().required('آیدی پوشه الزامی است').matches(/^[0-9a-fA-F]{24}$/, 'آیدی پوشه معتبر نیست'),
  name: yup.string().required('نام نظرسنجی الزامی است')
});

module.exports = surveySchemaValidation;
