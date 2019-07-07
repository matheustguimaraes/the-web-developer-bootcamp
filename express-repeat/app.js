var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hi there, welcome to my assignment!');
});

app.get('/:animal', function (req, res) {
    var sounds = {
        pig = 'Oink',
        cow = 'Moo',
        dog = 'Woof Woof',
        
    };
    animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

app.get('/r/reppeat/:word/:number', function (req, res) {
    word = req.params.word;
    number = req.params.number;
    result = "";
    for (let index = 0; index < number; index++) {
        result += word + ' ';
    };
    res.send(word.toUpperCase);
});

app.get("*", function (req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function () {
    console.log('The server has started');
});