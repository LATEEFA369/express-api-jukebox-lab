// models/track.js

const mongoose = require('mongoose');

const tracktSchema = mongoose.Schema({
    title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
});

const Track = mongoose.model('Track', tracktSchema);

module.exports = Track;