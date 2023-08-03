const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the reaction schema
const reactionSchema = new Schema({
  // Auto-generated unique ID for the reaction
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  // Content of the reaction
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  // User's username who posted the reaction
  username: {
    type: String,
    required: true,
  },
  // Date and time the reaction was created
  createdAt: {
    type: Date,
    default: Date.now,
    // Function to format the date in a user-friendly way (not shown here)
    get: (timestamp) => formatDate(timestamp),
  },
}, {
  // Configuration options for the schema
  toJSON: {
    getters: true, // Allow using getters when converting to JSON
  },
  id: false, // Disable the '_id' field in the JSON output
});

// Export the reaction schema
module.exports = reactionSchema;


