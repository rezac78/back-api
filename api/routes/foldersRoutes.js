const express = require("express");
const router = express.Router();
const {
  createFolder,
  getFolders,
  getFolderById,
  updateFolder,
  deleteFolder,
} = require("../controllers/foldersController");

// Example routes for folders
router.post('/', createFolder);
router.get('/', getFolders);
router.get('/:id', getFolderById);
router.put('/:id', updateFolder);
router.delete('/:id', deleteFolder);
module.exports = router;
