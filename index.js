let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

let apiRoutes = require("./api-routes")


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var databaseURI = '';

// process.env.MONGODB_URI will only be defined if you 
// are running on Heroku
if(process.env.MONGODB_URI != undefined) {
   // use the string value of the environment variable
   databaseURI = process.env.MONGOLAB_GOLD_URI;
} else {
   // use the local database server
   databaseURI = 'mongodb://localhost:27017/sci123Solo';
}

mongoose.connect(databaseURI);

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes)

app.listen(port, function () {
    console.log("Running sci123-api on port " + port);
});