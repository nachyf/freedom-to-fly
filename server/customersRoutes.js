var express = require('express');
var app = express();
var customersRoutes = express.Router();

// Require Item model in our routes module
var Customer = require('./Customers');

// Defined store route
customersRoutes.route('/add').post(function (req, res) {
  var customer = new Customer(req.body);
  customer.save()
    .then(item => {
    res.status(200).json({'customer': 'Customer added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
customersRoutes.route('/').get(function (req, res) {
    Customer.find(function (err, customers){
    if(err){
      console.log(err);
    }
    else {
      res.json(customers);
    }
  });
});

// Defined edit route
customersRoutes.route('/costumer-details/:id').get(function (req, res) {
  var id = req.params.id;
  Customer.findById(id, function (err, customer){
      res.json(customer);
  });
});
//  Defined update route
customersRoutes.route('/update/:id').post(function (req, res) {
    Customer.findById(req.params.id, function(err, customer) {
    if (!customer)
      return next(new Error('Could not load Document'));
    else {
        customer.firstName = req.body.firstName;
        customer.lastName = req.body.lastName;
        customer.phoneNumber = req.body.phoneNumber;
        customer.emailAddress = req.body.emailAddress;
        customer.creditCard = req.body.creditCard;
        customer.numberOfPassengers = req.body.numberOfPassengers;

        customer.save().then(customer => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
customersRoutes.route('/delete/:id').get(function (req, res) {
    Customer.findByIdAndRemove({_id: req.params.id}, function(err, customer){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = customersRoutes;
