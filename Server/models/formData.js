const mongoose = require('mongoose');

// Define the schema for the FormData model
const formDataSchema = new mongoose.Schema({
    bankName: {
    type: String,
    required: true,
  },
  taskTitle: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: true,
  },
  taskAddedOn: {
    type: Date,
    required: true,
  },
  taskStartDate: {
    type: Date,
    required: true,
  },
  taskCompletionDate: {
    type: Date,
    required: true,
  },
  taskDueDate: {
    type: Date,
    required: true,
  },
  taskNote: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

// Create the FormData model
const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
