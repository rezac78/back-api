const yup = require('yup');

const folderSchemaValidation = yup.object().shape({
  name: yup.string().required('نام پوشه الزامی است'),
  order: yup.number().required('ترتیب پوشه الزامی است').min(1, 'ترتیب پوشه باید حداقل 1 باشد')
});

module.exports = folderSchemaValidation;
