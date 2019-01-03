let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

let apiRoutes = require("./api-routes")


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/sci123Solo');

var db = mongoose.connection;

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes)

app.listen(port, function () {
    console.log("Running sci123-api on port " + port);
});