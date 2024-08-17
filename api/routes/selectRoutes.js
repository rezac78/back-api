const express = require("express");
const router = express.Router();
const {
  createSelect,
  getSelect,
  getSelectById,
  updateSelect,
  deleteSelect,
} = require("../controllers/selectController");

// Example routes for select
router.post('/', createSelect);
router.get('/', getSelect);
router.get('/:id', getSelectById);
router.put('/:id', updateSelect);
router.delete('/:id', deleteSelect);
module.exports = router;
