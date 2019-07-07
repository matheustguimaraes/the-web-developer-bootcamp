var express = require('express');
var app = express();

// "/" => "Hi there!"
app.get('/', function (req, res) {
  res.send('Hi there!');
});

// "/bye" => "Goodbye!"
app.get('/bye', function (req, res) {
  res.send('Goodbye!');
});

// "/dog" => "MEOW!"
app.get('/dog', function (req, res) {
  console.log('Someone made a request');
  res.send('MEOW!');
});

app.get('/r/:subredditName', function (req, res) {
  res.send('Welcome to a subreddit!');
});


app.get('/r/:subredditName/comments/:id/:title/', function (req, res) {
  res.send('Welcome to the comments page!');
});


// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function () {
  console.log('The server has started');
});

app.get("*", function (req, res) {
  res.send("You are a star");
});