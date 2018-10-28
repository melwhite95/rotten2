const mongoose = require('mongoose');


const Review = mongoose.model('reviews', {
  title: String,
  description: String,
  movieTitle: String,
  rating: Number
});

module.exports = Review
