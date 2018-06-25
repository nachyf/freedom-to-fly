var express = require('express');
var app = express();
var flightRoutes = express.Router();

// Require Item model in our routes module
var Flight = require('../models/Flight');

// Defined store route
flightRoutes.route('/add').post(function (req, res) {
  var flight = new Flight(req.body);
  flight.save()
    .then(item => {
    res.status(200).json({'flight': 'Flight added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
flightRoutes.route('/').get(function (req, res) {
    Flight.find(function (err, flightSchedule){
    if(err){
      console.log(err);
    }
    else {
      res.json(flightSchedule);
    }
  });
});

// Defined edit route
flightRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Flight.findById(id, function (err, flight){
      res.json(flight);
  });
});

flightRoutes.route('/flight-details/:id').get(function (req, res) {
  var id = req.params.id;
  Flight.findById(id, function (err, flight){
      res.json(flight);
  });
});




//  Defined update route
flightRoutes.route('/update/:id').post(function (req, res) {
    Flight.findById(req.params.id, function(err, flight) {
    if (!flight)
      return next(new Error('Could not load Document'));
    else {
      flight.codeflight = req.body.codeflight;
      flight.departure = req.body.departure;
      flight.back = req.body.back;
      flight.target = req.body.target;
      flight.status = req.body.status;
      flight.price = req.body.price;

      flight.save().then(flight => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
flightRoutes.route('/delete/:id').get(function (req, res) {
    Flight.findByIdAndRemove({_id: req.params.id}, function(err, flight){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = flightRoutes;