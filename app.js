var express = require("express");
var morgan  = require("morgan");
var logger  = require('./logger');

app = express();
app.use(morgan('combined'));

// custom middle ware
//app.use(logger);

// for running static pages in public
app.use(express.static('public'));

app.get('/', function(request, response){
    // Express Function
    //response.send("Hello World!");
    // Node Function
    //response.write("Node Function");
    //response.end();
    //response.sendFile(__dirname + '/public/index.html');
});

app.get('/blocks', function(request, response){
  var blocks = ['hello','how','are','you','?'];
  response.send(blocks);
});

app.get('/block', function(request, response){
  var block = "hello how are you ?";
  response.json(block);
});

app.get('/move', function(request, response){
  //redirecting to new route 301: permenant 302:temporarily
  response.redirect(301, '/new');
});

app.get('/new', function(request, response){
  response.send("Moved temporarily");
});

app.get('/blocks/:Hi', function(request, response){
  var blocks =  {'Hello' : 'farrukh',
                 'Hi'    : 'askari' ,
                 'How'   : 'Bro'    ,
                 'You'   : 'BB'};
  var pram    = request.params.Hi;
  var massage = pram[0].toUpperCase() + pram.slice(1).toLowerCase();

  response.json(Object.keys(massage));
  });

app.listen(3000, function(request,response){
    console.log("Listening on port 3000");
});
