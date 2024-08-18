const express = require("express");
const router = express.Router();
const {
  createSurvey,
  getSurvey,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
} = require("../controllers/surveyController");

// Example routes for survey
router.post('/', createSurvey);
router.get('/', getSurvey);
router.get('/:id', getSurveyById);
router.put('/:id', updateSurvey);
router.delete('/:id', deleteSurvey);
module.exports = router;
