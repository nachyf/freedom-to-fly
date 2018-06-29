const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      db = "mongodb://flights-website:flights-website1@ds223760.mlab.com:23760/freedom-to-fly",
      customersRoutes = require('./server/customersRoutes'),
      flightRoutes = require('./server/flightRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(db).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/flightSchedule', flightRoutes);
app.use('/customers', customersRoutes);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
