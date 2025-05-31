const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create game' });
  }
});

router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!game) return res.status(404).json({ error: 'Game not found' });
    res.json(game);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update game' });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) return res.status(404).json({ error: 'Game not found' });
    res.json({ message: 'Game deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete game' });
  }
});

module.exports = router;
