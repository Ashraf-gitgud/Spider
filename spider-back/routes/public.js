const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const Application = require('../models/Application');

router.get('/games', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/applications', async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
