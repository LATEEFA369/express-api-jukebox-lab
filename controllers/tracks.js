const Track = require('../models/track');
const express = require('express');

const router = express.Router();


router.post('/', async (req, res) => {
    try {
      const newTrack = await Track.create(req.body);
      res.status(201).json(newTrack);
    } catch (error) {
      res.status(500).json({ error: `failed to create track ${error}` });
    }
  });
  
router.get('/', async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ error: `failed to load tracks ${error}` });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);

    if (!track) throw new Error('Track not found');

    res.status(200).json(track);
  } catch (error) {
    res.status(500).json({ error: `failed to get track ${error}` });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const track = await Track.findByIdAndDelete(req.params.id);

    if (!track) throw new Error('Track not found');

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: `Unable to delete: ${error}` });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const track = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!track) throw new Error('Track not found');

    res.status(200).json(track);
  } catch (error) {
    res.status(500).json(`Failed to update track ${error}`);
  }
});


module.exports = router;