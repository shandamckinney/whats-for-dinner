const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Recipe = new Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  ingredients: {
    type: String
  },
  rating: {
    type: Number
  },
  cookTime: {
    type: Number
  },
  IsSelected: {
    type: Boolean
  }
}, {
  collection: 'recipes'
})

module.exports = mongoose.model('Recipe', Recipe)