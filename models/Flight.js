var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Flight = new Schema({
  codeflight: {
    type: String
  },
  departure: {
    type: String
  },
  back: {
    type: String
  },
  target: {
    type: String
  },
  status: {
    type: String
  },
  price: {
    type: String
  }
},{
    collection: 'flightSchedule'
});

module.exports = mongoose.model('Flight', Flight);