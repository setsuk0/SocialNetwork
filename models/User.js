const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the user schema
const userSchema = new Schema({
  // User's username
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  // User's email address
  email: {
    type: String,
    required: true,
    unique: true,
    // Validate the email format using a regular expression
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  // Array of references to the user's thoughts
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  // Array of references to the user's friends (other users)
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
}, {
  // Configuration options for the schema
  toJSON: {
    virtuals: true, // Include virtual properties when converting to JSON
  },
  id: false, // Disable the '_id' field in the JSON output
});

// Virtual property to get the count of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create the User model using the user schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;

