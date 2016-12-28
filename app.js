var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({
    extended: false
});
var port = process.env.PORT || 3001;

var userInput = [];
var answerArray = [];

app.listen(port, function(req, res) {
    console.log('server is listening on', port);
}); //end spin up server

//base url
app.get('/', function(req, res) {
    console.log('base url hit');
    res.sendFile(path.resolve('public/index.html'));
}); //end base url

//static folder
app.use(express.static('public'));

app.post('/sendData', urlEncodedParser, function(req, res) {
    console.log('req.body in post = ', req.body);
    userInput.push(req.body);
    calculateData();
});

var calculateData = function() {
    console.log('inside my module');
    var answer = '';
    for (var i = 0; i < userInput.length; i++) {
        if (userInput[i].type === 'add') {
            answer = Number(userInput[i].x) + Number(userInput[i].y);
            console.log(answer);
        } else if (userInput[i].type === 'subtract') {
            answer = Number(userInput[i].x) - Number(userInput[i].y);
            console.log(answer);
        } else if (userInput[i].type === 'multiply') {
            answer = Number(userInput[i].x) * Number(userInput[i].y);
            console.log(answer);
        } else if (userInput[i].type === 'divide') {
            answer = Number(userInput[i].x) / Number(userInput[i].y);
            console.log(answer);
        }
    } //end for loop
    answerArray.push(answer);

}; //end calculateData function

app.get('/returnData', function(req, res) {
    console.log('base url hit in app.get');
    res.send(answerArray);
}); //end send info back
