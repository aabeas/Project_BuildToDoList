const express = require('express');
const app = express();
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')

// const path = require('path');

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.get('/', function(req, res){
  res.render("home", {
    pageTitle: "Home"
  })
});

app.get('/duedone', function(req, res){
  res.render("duedone", {
    pageTitle: "DueAndDone",
    listTitle01: "Due",
    itemsDue: [
      { item: " Learn about authentication" },
      { item: " Learn how to connect to PostgreSQL" },
      { item: " Learn how to create databases" },
      { item: " Learn SQL" },
      { item: " Learn how to connect to PostgreSQL from Node" },
      { item: " Learn how to use Sequelize" },
    ],
//   })
// })
//
// app.get('/duedone', function(req, res){
//   res.render("duedone", {
    listTitle02: "Done",
    itemsDone: [
      { item: " Learn Node basics" },
      { item: " Learn Express basics" },
      { item: " Learn Mustache" },
      { item: " Learn HTML forms with Express" },
    ]
  })
})


app.listen(3000, function(){
  console.log("are you listening?")
});
