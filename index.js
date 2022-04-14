//incluye la librería de express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000))
//app.use(express.json());
//app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/', function (request, response) {
    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back
});

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
})
