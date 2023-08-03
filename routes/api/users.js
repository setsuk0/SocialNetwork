const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

// Get all users or create a new user
router.route('/users')
  .get(userController.getAllUsers)
  .post(userController.createUser);

// Get a user by ID, update a user, or delete a user
router.route('/users/:id')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

// Add a friend or remove a friend for a user
router.route('/users/:userId/friends/:friendId')
  .post(userController.addFriend)
  .delete(userController.removeFriend);

module.exports = router;

