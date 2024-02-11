const express = require('express');
const userUtil = require('../utils/userUtils');

const router = express.Router();

router.post('/add-user', async (req, res) => {
  try {
    await userUtil.addUser(req.body);
    res.status(200).json({ message: 'User data submitted successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
