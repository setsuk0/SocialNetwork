const express = require('express');
const router = express.Router();
const reactionController = require('../../controllers/reactionController');

// Create a reaction for a thought
router.post('/thoughts/:thoughtId/reactions', reactionController.createReaction);

// Delete a reaction for a thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', reactionController.deleteReaction);

module.exports = router;
