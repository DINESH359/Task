const mongoose = require('mongoose');

// Define the schema for the FormData model
const userDataSchema = new mongoose.Schema({
        username: {
    type: String,
    required: true,
    minlength: 3, 
    maxlength: 8, 
  },
        firstName: {
    type: String,
    required: true,
    minlength: 1, 
    maxlength: 10,
  },
        middleName: {
    type: String,
    required: false,
  },
        lastName: {
    type: String,
    required: true,
  },
        employeeId: {
    type: String,
    required: true,
    minlength: 2, 
    maxlength: 5,
  },
        email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
        mobile: {
    type: String,
    required: true,
    match: /^\d{10}$/,
  },
        hierarchy: {
            type: String,
            required: true,
        }
  // Add more fields as needed
});

// Create the FormData model
const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
