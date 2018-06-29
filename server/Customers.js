var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Customer = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  emailAddress: {
    type: String
  },
  creditCard: {
    type: Number
  },
  numberOfPassengers: {
    type: Number
  }
},{
    collection: 'customers'
});

module.exports = mongoose.model('Customer', Customer);