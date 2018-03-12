const express = require('express');
const bodyParser = require('body-parser');

var models = require('./models/userModel');
var routes = require('./routes/userRoutes');

var port = process.env.PORT | 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen( port , () => {
  console.log(`Server is up and running at port ` + port);
});
