const express = require("express");
const router = express.Router();
const {
  createWelcome,
  getWelcomes,
  getWelcomeById,
  updateWelcome,
  deleteWelcome,
} = require("../controllers/welcomeController");

// Example routes for Welcome
router.post('/', createWelcome);
router.get('/', getWelcomes);
router.get('/:id', getWelcomeById);
router.put('/:id', updateWelcome);
router.delete('/:id', deleteWelcome);
module.exports = router;
