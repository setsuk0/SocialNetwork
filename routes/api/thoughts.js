const express = require('express');
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

const router = express.Router();

router.route('/thoughts')
  .get(getAllThoughts)
  .post(createThought);

router.route('/thoughts/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
