const express = require('express');
const taskUtil = require('../utils/taskUtils');

const router = express.Router();

router.get('/get-tasks', async (req, res) => {
  try {
    const tasks = await taskUtil.getAllTasks();
    res.status(200).json({ tasks });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/submit-form', async (req, res) => {
  try {
    await taskUtil.submitFormData(req.body);
    res.status(200).json({ message: 'Form data submitted successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
